import { Injectable, NotFoundException, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { RegisterDeviceDto } from './dto/register-device.dto';
import { SendPushNotificationDto } from './dto/send-push-notification.dto';
import { NotificationChannel } from '@prisma/client';
import { NotificationHandler, NotificationData } from './notification.handler';

@Injectable()
export class NotificationsService {
  private readonly isDebug = process.env.NODE_ENV !== 'production';
  private readonly TOPIC_PREFIX = 'role_';

  constructor(
    private readonly prisma: PrismaService,
    private readonly notificationHandler: NotificationHandler,
  ) {}

  async registerDevice(dto: RegisterDeviceDto) {
    const { userId, fcmToken, deviceInfo } = dto;

    if (!fcmToken) {
      throw new BadRequestException('Token FCM não informado');
    }

    if (fcmToken.length < 20) {
      throw new BadRequestException('Formato de token FCM inválido');
    }

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(`Usuário com ID ${userId} não encontrado`);
    }

    if (this.isDebug) {
      try {
        const message: NotificationData = {
          token: fcmToken,
          title: 'Registro Confirmado',
          body: 'Seu dispositivo foi registrado com sucesso',
        };
        await this.notificationHandler.sendNotification(message);
      } catch (error) {
        throw new BadRequestException('Token FCM inválido ou expirado');
      }
    }

    const existingDevice = await this.prisma.userDevice.findFirst({
      where: { userId, fcmToken },
    });

    if (!existingDevice) {
      const device = await this.prisma.userDevice.create({
        data: {
          userId,
          fcmToken,
          deviceInfo,
        },
      });

      await this.subscribeToRoleTopic(fcmToken, user.role);
      return { message: 'Token FCM registrado com sucesso', device };
    }

    const updated = await this.prisma.userDevice.update({
      where: { id: existingDevice.id },
      data: {
        deviceInfo,
        lastActiveAt: new Date(),
      },
    });

    return { message: 'Token FCM atualizado com sucesso', device: updated };
  }

  async removeDevice(userId: number, fcmToken: string) {
    if (!fcmToken || fcmToken.trim().length === 0) {
      throw new BadRequestException('O token não pode ser vazio');
    }

    const device = await this.prisma.userDevice.findFirst({
      where: { userId, fcmToken },
      include: { user: true },
    });

    if (!device) {
      throw new NotFoundException('Dispositivo não encontrado');
    }

    await this.unsubscribeFromRoleTopic(fcmToken, device.user.role);

    await this.prisma.userDevice.delete({
      where: { id: device.id },
    });

    return { message: 'Dispositivo removido com sucesso' };
  }

  async createNotification(dto: CreateNotificationDto) {
    const { userId, title, message, channel, metadata } = dto;

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException(`Usuário com ID ${userId} não encontrado`);
    }

    const notification = await this.prisma.notification.create({
      data: {
        userId,
        title,
        message,
        channel: channel || NotificationChannel.push,
        metadata: metadata || {},
      },
    });

    return notification;
  }

  async sendPushNotification(dto: SendPushNotificationDto) {
    const { userIds, title, body, data, imageUrl } = dto;
    const userIdArray = Array.isArray(userIds) ? userIds : [userIds];

    const results: {
      success: Array<{ userId: number; status: string }>;
      failed: Array<{ userId: number; error: string }>;
    } = {
      success: [],
      failed: [],
    };

    for (const userId of userIdArray) {
      try {
        await this.createNotification({
          userId,
          title,
          message: body,
          channel: NotificationChannel.push,
          metadata: data || {},
        });

        await this.sendPushToUser(userId, title, body, data);

        results.success.push({ userId, status: 'sent' });
      } catch (error) {
        results.failed.push({ userId, error: error.message });
      }
    }

    return results;
  }

  private async sendPushToUser(
    userId: number,
    title: string,
    body: string,
    data?: Record<string, any>,
  ) {
    const devices = await this.prisma.userDevice.findMany({
      where: { userId },
    });

    if (devices.length === 0) {
      console.warn(`Usuário ${userId} não possui dispositivos registrados`);
      return;
    }

    const tokens = devices.map((device) => device.fcmToken);

    const stringData: Record<string, string> = {};
    if (data) {
      Object.keys(data).forEach((key) => {
        stringData[key] = String(data[key]);
      });
    }

    const result = await this.notificationHandler.sendMulticast(tokens, title, body, stringData);

    if (result.failedTokens.length > 0) {
      await this.prisma.userDevice.deleteMany({
        where: { fcmToken: { in: result.failedTokens } },
      });
    }

    return result;
  }

  async getUserNotifications(userId: number, unreadOnly = false) {
    const where: any = { userId };
    if (unreadOnly) {
      where.read = false;
    }

    return await this.prisma.notification.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
  }

  async markAsRead(notificationIds: number | number[]) {
    const ids = Array.isArray(notificationIds) ? notificationIds : [notificationIds];

    await this.prisma.notification.updateMany({
      where: {
        id: { in: ids },
      },
      data: {
        read: true,
      },
    });

    return { message: `${ids.length} notificação(ões) marcada(s) como lida(s)` };
  }

  async markAllAsRead(userId: number) {
    const result = await this.prisma.notification.updateMany({
      where: {
        userId,
        read: false,
      },
      data: {
        read: true,
      },
    });

    return { message: `${result.count} notificação(ões) marcada(s) como lida(s)` };
  }

  async sendPushFromExisting(notificationId: number) {
    const notification = await this.prisma.notification.findUnique({
      where: { id: notificationId },
    });

    if (!notification) {
      throw new NotFoundException(`Notificação com ID ${notificationId} não encontrada`);
    }

    try {
      await this.sendPushToUser(
        notification.userId,
        notification.title,
        notification.message,
        notification.metadata as Record<string, any>,
      );

      return { 
        message: 'Push enviado com sucesso',
        notificationId: notification.id,
        userId: notification.userId
      };
    } catch (error) {
      throw new BadRequestException(`Erro ao enviar push: ${error.message}`);
    }
  }

  async deleteNotification(id: number) {
    const notification = await this.prisma.notification.findUnique({
      where: { id },
    });

    if (!notification) {
      throw new NotFoundException(`Notificação com ID ${id} não encontrada`);
    }

    await this.prisma.notification.delete({
      where: { id },
    });

    return { message: 'Notificação deletada com sucesso' };
  }

  async deleteReadNotifications(userId: number) {
    const result = await this.prisma.notification.deleteMany({
      where: {
        userId,
        read: true,
      },
    });

    return { message: `${result.count} notificação(ões) deletada(s)` };
  }

  private async subscribeToRoleTopic(token: string, role: string) {
    const topic = `${this.TOPIC_PREFIX}${role}`;
    try {
      await this.notificationHandler.subscribeToTopic(token, topic);
    } catch (error) {
      console.error(`Erro ao inscrever token no tópico ${topic}:`, error);
    }
  }

  private async unsubscribeFromRoleTopic(token: string, role: string) {
    const topic = `${this.TOPIC_PREFIX}${role}`;
    try {
      await this.notificationHandler.unsubscribeFromTopic(token, topic);
    } catch (error) {
      console.error(`Erro ao desinscrever token do tópico ${topic}:`, error);
    }
  }

  async subscribeDeviceToTopics(fcmToken: string, topics: string[]) {
    const results = {
      success: [] as string[],
      failed: [] as string[],
    };

    for (const topic of topics) {
      const normalizedTopic = topic
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z0-9-_.~%]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');

      if (!normalizedTopic) {
        results.failed.push(topic);
        continue;
      }

      try {
        await this.notificationHandler.subscribeToTopic(fcmToken, normalizedTopic);
        results.success.push(normalizedTopic);
      } catch (error) {
        results.failed.push(topic);
      }
    }

    return results;
  }

  async unsubscribeDeviceFromTopics(fcmToken: string, topics: string[]) {
    const results = {
      success: [] as string[],
      failed: [] as string[],
    };

    for (const topic of topics) {
      const normalizedTopic = topic
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z0-9-_.~%]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');

      if (!normalizedTopic) {
        results.failed.push(topic);
        continue;
      }

      try {
        await this.notificationHandler.unsubscribeFromTopic(fcmToken, normalizedTopic);
        results.success.push(normalizedTopic);
      } catch (error) {
        results.failed.push(topic);
      }
    }

    return results;
  }

  async sendToTopic(
    topic: string,
    title: string,
    body: string,
    data?: Record<string, string>,
  ): Promise<void> {
    if (!topic || topic.trim().length === 0) {
      throw new BadRequestException('O tópico não pode ser vazio');
    }

    const normalizedTopic = topic
      .trim()
      .toLowerCase()
      .replace(/[^a-zA-Z0-9-_.~%]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

    console.log(`[sendToTopic] Original: "${topic}" -> Normalized: "${normalizedTopic}"`);

    if (!normalizedTopic || normalizedTopic.length === 0) {
      throw new BadRequestException('O nome do tópico é inválido');
    }

    if (!title || title.trim().length === 0) {
      throw new BadRequestException('O título não pode ser vazio');
    }

    if (!body || body.trim().length === 0) {
      throw new BadRequestException('O corpo da notificação não pode ser vazio');
    }

    const notificationData: NotificationData = {
      topic: normalizedTopic,
      title,
      body,
      data: data || {},
    };

    try {
      await this.notificationHandler.sendNotification(notificationData);
    } catch (error) {
      console.error('Erro ao enviar notificação:', error);
      throw new InternalServerErrorException(
        'Erro ao enviar notificação para o tópico',
      );
    }
  }

  async countUnread(userId: number) {
    const count = await this.prisma.notification.count({
      where: {
        userId,
        read: false,
      },
    });

    return { count };
  }

  async sendNotificationByRole(
    role: string,
    title: string,
    message: string,
    metadata?: Record<string, any>,
  ) {
    const topic = `${this.TOPIC_PREFIX}${role}`;

    if (!topic || topic.trim().length === 0) {
      throw new BadRequestException('O tópico não pode ser vazio');
    }

    if (!title || title.trim().length === 0) {
      throw new BadRequestException('O título não pode ser vazio');
    }

    if (!message || message.trim().length === 0) {
      throw new BadRequestException('O corpo da notificação não pode ser vazio');
    }

    const stringData: Record<string, string> = {};
    if (metadata) {
      Object.keys(metadata).forEach((key) => {
        stringData[key] = String(metadata[key]);
      });
    }

    const notificationData: NotificationData = {
      topic,
      title,
      body: message,
      data: stringData,
    };

    const result = await this.notificationHandler.sendNotification(notificationData);

    const users = await this.prisma.user.findMany({
      where: { role: role as any },
      select: { id: true },
    });

    await Promise.all(
      users.map((user) =>
        this.prisma.notification.create({
          data: {
            userId: user.id,
            title,
            message,
            channel: NotificationChannel.push,
            metadata: metadata || {},
          },
        }),
      ),
    );

    return {
      message: `Notificação enviada via tópico ${topic}`,
      messageId: result.messageId,
      usersNotified: users.length,
    };
  }
}
