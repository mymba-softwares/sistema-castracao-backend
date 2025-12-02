import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { RegisterDeviceDto } from './dto/register-device.dto';
import { SendPushNotificationDto } from './dto/send-push-notification.dto';
import { MarkAsReadDto } from './dto/mark-as-read.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../decorators/role-decorator';
import { Role } from '@prisma/client';

@ApiTags('Notificações')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post('register-device')
  @ApiOperation({ 
    summary: 'Registrar dispositivo para notificações push',
    description: 'Registra um novo dispositivo FCM para o usuário. Suporta múltiplos dispositivos por usuário. O dispositivo é automaticamente inscrito no tópico da role do usuário (role_{roleName}).'
  })
  @ApiResponse({ status: 201, description: 'Dispositivo registrado com sucesso' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  async registerDevice(@Body() dto: RegisterDeviceDto) {
    return await this.notificationsService.registerDevice(dto);
  }

  @Delete('device/:userId/:fcmToken')
  @ApiOperation({ summary: 'Remover dispositivo registrado' })
  @ApiResponse({ status: 200, description: 'Dispositivo removido com sucesso' })
  @ApiResponse({ status: 404, description: 'Dispositivo não encontrado' })
  async removeDevice(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('fcmToken') fcmToken: string,
  ) {
    return await this.notificationsService.removeDevice(userId, fcmToken);
  }

  @Post()
  @Roles(Role.administrator, Role.veterinarian, Role.receptionist)
  @ApiOperation({ summary: 'Criar nova notificação' })
  @ApiResponse({ status: 201, description: 'Notificação criada com sucesso' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  async createNotification(@Body() dto: CreateNotificationDto) {
    return await this.notificationsService.createNotification(dto);
  }

  @Post('send-push')
  @Roles(Role.administrator, Role.veterinarian, Role.receptionist)
  @ApiOperation({ 
    summary: 'Enviar notificação push para um ou mais usuários',
    description: 'Envia notificação push para todos os dispositivos registrados dos usuários especificados. Usa multicast do FCM para eficiência.'
  })
  @ApiResponse({ status: 201, description: 'Notificação enviada com sucesso' })
  async sendPushNotification(@Body() dto: SendPushNotificationDto) {
    return await this.notificationsService.sendPushNotification(dto);
  }

  @Post('send-by-role')
  @Roles(Role.administrator)
  @ApiOperation({ 
    summary: 'Enviar notificação para todos os usuários de uma role via tópico',
    description: 'Envia notificação usando o padrão de tópico role_{roleName}. Todos os dispositivos inscritos no tópico receberão a notificação, mesmo que offline.'
  })
  @ApiResponse({ status: 201, description: 'Notificações enviadas com sucesso' })
  async sendByRole(
    @Body() body: { role: string; title: string; message: string; metadata?: Record<string, any> },
  ) {
    return await this.notificationsService.sendNotificationByRole(
      body.role,
      body.title,
      body.message,
      body.metadata,
    );
  }

  @Post('topics/send')
  @Roles(Role.administrator)
  @ApiOperation({ summary: 'Enviar notificação para um tópico específico' })
  @ApiResponse({ status: 201, description: 'Notificação enviada com sucesso' })
  async sendToTopic(
    @Body() body: { topic: string; title: string; body: string; data?: Record<string, string> },
  ) {
    return await this.notificationsService.sendToTopic(
      body.topic,
      body.title,
      body.body,
      body.data,
    );
  }

  @Post('topics/subscribe')
  @ApiOperation({ summary: 'Inscrever dispositivo em tópicos' })
  @ApiResponse({ status: 200, description: 'Dispositivo inscrito nos tópicos' })
  async subscribeToTopics(@Body() body: { fcmToken: string; topics: string[] }) {
    return await this.notificationsService.subscribeDeviceToTopics(body.fcmToken, body.topics);
  }

  @Post('topics/unsubscribe')
  @ApiOperation({ summary: 'Desinscrever dispositivo de tópicos' })
  @ApiResponse({ status: 200, description: 'Dispositivo desinscrito dos tópicos' })
  async unsubscribeFromTopics(@Body() body: { fcmToken: string; topics: string[] }) {
    return await this.notificationsService.unsubscribeDeviceFromTopics(body.fcmToken, body.topics);
  }

  @Get('user/:userId')
  @ApiOperation({ summary: 'Listar notificações de um usuário' })
  @ApiQuery({ name: 'unreadOnly', required: false, type: Boolean })
  @ApiResponse({ status: 200, description: 'Lista de notificações' })
  async getUserNotifications(
    @Param('userId', ParseIntPipe) userId: number,
    @Query('unreadOnly') unreadOnly?: boolean,
  ) {
    return await this.notificationsService.getUserNotifications(userId, unreadOnly);
  }

  @Get('user/:userId/unread-count')
  @ApiOperation({ summary: 'Contar notificações não lidas de um usuário' })
  @ApiResponse({ status: 200, description: 'Número de notificações não lidas' })
  async countUnread(@Param('userId', ParseIntPipe) userId: number) {
    return await this.notificationsService.countUnread(userId);
  }

  @Post('mark-as-read')
  @ApiOperation({ summary: 'Marcar notificações como lidas' })
  @ApiResponse({ status: 200, description: 'Notificações marcadas como lidas' })
  async markAsRead(@Body() dto: MarkAsReadDto) {
    return await this.notificationsService.markAsRead(dto.notificationIds);
  }

  @Post('user/:userId/mark-all-read')
  @ApiOperation({ summary: 'Marcar todas as notificações de um usuário como lidas' })
  @ApiResponse({ status: 200, description: 'Todas as notificações marcadas como lidas' })
  async markAllAsRead(@Param('userId', ParseIntPipe) userId: number) {
    return await this.notificationsService.markAllAsRead(userId);
  }

  @Post(':id/send-push')
  @Roles(Role.administrator, Role.veterinarian, Role.receptionist)
  @ApiOperation({ 
    summary: 'Enviar push de uma notificação já existente',
    description: 'Envia notificação push para uma notificação que foi criada anteriormente no banco (DB only)'
  })
  @ApiResponse({ status: 200, description: 'Push enviado com sucesso' })
  @ApiResponse({ status: 404, description: 'Notificação não encontrada' })
  async sendPushFromExisting(@Param('id', ParseIntPipe) id: number) {
    return await this.notificationsService.sendPushFromExisting(id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar uma notificação' })
  @ApiResponse({ status: 200, description: 'Notificação deletada com sucesso' })
  @ApiResponse({ status: 404, description: 'Notificação não encontrada' })
  async deleteNotification(@Param('id', ParseIntPipe) id: number) {
    return await this.notificationsService.deleteNotification(id);
  }

  @Delete('user/:userId/read')
  @ApiOperation({ summary: 'Deletar todas as notificações lidas de um usuário' })
  @ApiResponse({ status: 200, description: 'Notificações deletadas com sucesso' })
  async deleteReadNotifications(@Param('userId', ParseIntPipe) userId: number) {
    return await this.notificationsService.deleteReadNotifications(userId);
  }
}
