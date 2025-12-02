import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsService } from './notifications.service';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationHandler } from './notification.handler';
import { NotificationChannel } from '@prisma/client';
import { NotFoundException, BadRequestException } from '@nestjs/common';

describe('NotificationsService', () => {
  let service: NotificationsService;
  let prismaService: PrismaService;
  let notificationHandler: NotificationHandler;

  const mockPrismaService = {
    userDevice: {
      findFirst: jest.fn(),
      findMany: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      deleteMany: jest.fn(),
    },
    notification: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      count: jest.fn(),
      update: jest.fn(),
      updateMany: jest.fn(),
      delete: jest.fn(),
      deleteMany: jest.fn(),
    },
    user: {
      findUnique: jest.fn(),
      findMany: jest.fn(),
    },
  };

  const mockNotificationHandler = {
    sendNotification: jest.fn(),
    sendMulticast: jest.fn(),
    subscribeToTopic: jest.fn(),
    unsubscribeFromTopic: jest.fn(),
    subscribeToTopics: jest.fn(),
    unsubscribeFromTopics: jest.fn(),
  };

  beforeEach(async () => {
    process.env.NODE_ENV = 'test';

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NotificationsService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
        {
          provide: NotificationHandler,
          useValue: mockNotificationHandler,
        },
      ],
    }).compile();

    service = module.get<NotificationsService>(NotificationsService);
    prismaService = module.get<PrismaService>(PrismaService);
    notificationHandler = module.get<NotificationHandler>(NotificationHandler);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('registerDevice', () => {
    it('should throw BadRequestException if token is empty', async () => {
      await expect(
        service.registerDevice({
          userId: 1,
          fcmToken: '',
          deviceInfo: 'iPhone 14',
        }),
      ).rejects.toThrow(BadRequestException);
    });

    it('should throw BadRequestException if token is too short', async () => {
      await expect(
        service.registerDevice({
          userId: 1,
          fcmToken: 'short',
          deviceInfo: 'iPhone 14',
        }),
      ).rejects.toThrow(BadRequestException);
    });

    it('should throw NotFoundException if user not found', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue(null);

      await expect(
        service.registerDevice({
          userId: 1,
          fcmToken: 'valid-token-123456789012345',
          deviceInfo: 'iPhone 14',
        }),
      ).rejects.toThrow(NotFoundException);
    });

    it('should register a new device and subscribe to role topic', async () => {
      const userId = 1;
      const fcmToken = 'valid-token-123456789012345';
      const deviceInfo = 'iPhone 14 - iOS 17.1';

      const mockUser = { id: userId, name: 'Test User', role: 'petOwner' };
      const mockDevice = { id: 1, userId, fcmToken, deviceInfo };

      mockPrismaService.user.findUnique.mockResolvedValue(mockUser);
      mockPrismaService.userDevice.findFirst.mockResolvedValue(null);
      mockPrismaService.userDevice.create.mockResolvedValue(mockDevice);
      mockNotificationHandler.subscribeToTopic.mockResolvedValue({ success: true });

      const result = await service.registerDevice({
        userId,
        fcmToken,
        deviceInfo,
      });

      expect(result.message).toBe('Token FCM registrado com sucesso');
      expect(result.device).toEqual(mockDevice);
      expect(mockPrismaService.userDevice.create).toHaveBeenCalledWith({
        data: { userId, fcmToken, deviceInfo },
      });
      expect(mockNotificationHandler.subscribeToTopic).toHaveBeenCalledWith(
        fcmToken,
        'role_petOwner',
      );
    });

    it('should update existing device', async () => {
      const userId = 1;
      const fcmToken = 'valid-token-123456789012345';
      const deviceInfo = 'iPhone 14 - iOS 17.2';

      const mockUser = { id: userId, name: 'Test User', role: 'petOwner' };
      const mockExistingDevice = {
        id: 1,
        userId,
        fcmToken,
        deviceInfo: 'iPhone 14 - iOS 17.1',
      };
      const mockUpdatedDevice = { ...mockExistingDevice, deviceInfo };

      mockPrismaService.user.findUnique.mockResolvedValue(mockUser);
      mockPrismaService.userDevice.findFirst.mockResolvedValue(mockExistingDevice);
      mockPrismaService.userDevice.update.mockResolvedValue(mockUpdatedDevice);

      const result = await service.registerDevice({
        userId,
        fcmToken,
        deviceInfo,
      });

      expect(result.message).toBe('Token FCM atualizado com sucesso');
      expect(result.device).toEqual(mockUpdatedDevice);
      expect(mockPrismaService.userDevice.update).toHaveBeenCalledWith({
        where: { id: mockExistingDevice.id },
        data: {
          deviceInfo,
          lastActiveAt: expect.any(Date),
        },
      });
    });
  });

  describe('removeDevice', () => {
    it('should throw BadRequestException if token is empty', async () => {
      await expect(service.removeDevice(1, '')).rejects.toThrow(BadRequestException);
    });

    it('should throw NotFoundException if device not found', async () => {
      mockPrismaService.userDevice.findFirst.mockResolvedValue(null);

      await expect(
        service.removeDevice(1, 'valid-token-123456789012345'),
      ).rejects.toThrow(NotFoundException);
    });

    it('should remove device and unsubscribe from role topic', async () => {
      const userId = 1;
      const fcmToken = 'valid-token-123456789012345';
      const mockDevice = {
        id: 1,
        userId,
        fcmToken,
        user: { id: userId, role: 'petOwner' },
      };

      mockPrismaService.userDevice.findFirst.mockResolvedValue(mockDevice);
      mockPrismaService.userDevice.delete.mockResolvedValue(mockDevice);
      mockNotificationHandler.unsubscribeFromTopic.mockResolvedValue({ success: true });

      const result = await service.removeDevice(userId, fcmToken);

      expect(result.message).toBe('Dispositivo removido com sucesso');
      expect(mockNotificationHandler.unsubscribeFromTopic).toHaveBeenCalledWith(
        fcmToken,
        'role_petOwner',
      );
      expect(mockPrismaService.userDevice.delete).toHaveBeenCalledWith({
        where: { id: mockDevice.id },
      });
    });
  });

  describe('createNotification', () => {
    it('should create a notification', async () => {
      const dto = {
        userId: 1,
        title: 'Test',
        message: 'Test message',
        metadata: { test: 'data' },
      };

      const mockNotification = {
        id: 1,
        ...dto,
        read: false,
        channel: NotificationChannel.push,
        createdAt: new Date(),
      };

      mockPrismaService.notification.create.mockResolvedValue(mockNotification);
      mockPrismaService.userDevice.findMany.mockResolvedValue([]);

      const result = await service.createNotification(dto);

      expect(result).toEqual(mockNotification);
      expect(mockPrismaService.notification.create).toHaveBeenCalledWith({
        data: {
          userId: dto.userId,
          title: dto.title,
          message: dto.message,
          channel: NotificationChannel.push,
          metadata: dto.metadata,
        },
      });
    });
  });

  describe('sendPushNotification', () => {
    it('should send push notification to multiple users', async () => {
      const dto = {
        userIds: [1, 2],
        title: 'Test',
        body: 'Test message',
        data: { key: 'value' },
      };

      const mockDevices1 = [
        { id: 1, userId: 1, fcmToken: 'token1' },
        { id: 2, userId: 1, fcmToken: 'token2' },
      ];

      const mockDevices2 = [
        { id: 3, userId: 2, fcmToken: 'token3' },
      ];

      mockPrismaService.notification.create.mockResolvedValue({ id: 1 });
      mockPrismaService.userDevice.findMany
        .mockResolvedValueOnce(mockDevices1)
        .mockResolvedValueOnce(mockDevices2);
      
      mockNotificationHandler.sendMulticast
        .mockResolvedValueOnce({
          successCount: 2,
          failureCount: 0,
          failedTokens: [],
        })
        .mockResolvedValueOnce({
          successCount: 1,
          failureCount: 0,
          failedTokens: [],
        });

      const result = await service.sendPushNotification(dto);

      expect(result.success.length).toBe(2);
      expect(result.failed.length).toBe(0);
    });
  });

  describe('sendNotificationByRole', () => {
    it('should throw BadRequestException if title is empty', async () => {
      await expect(
        service.sendNotificationByRole('petOwner', '', 'Message'),
      ).rejects.toThrow(BadRequestException);
    });

    it('should throw BadRequestException if message is empty', async () => {
      await expect(
        service.sendNotificationByRole('petOwner', 'Title', ''),
      ).rejects.toThrow(BadRequestException);
    });

    it('should send notification to all users with role via topic', async () => {
      const role = 'veterinarian';
      const title = 'Test';
      const message = 'Test message';

      const mockUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];

      mockNotificationHandler.sendNotification.mockResolvedValue({
        success: true,
        messageId: 'msg-123',
      });
      mockPrismaService.user.findMany.mockResolvedValue(mockUsers);
      mockPrismaService.notification.create.mockResolvedValue({});

      const result = await service.sendNotificationByRole(role, title, message);

      expect(result.message).toContain('role_veterinarian');
      expect(result.messageId).toBe('msg-123');
      expect(result.usersNotified).toBe(3);
      expect(mockNotificationHandler.sendNotification).toHaveBeenCalledWith({
        topic: 'role_veterinarian',
        title,
        body: message,
        data: {},
      });
    });
  });

  describe('getUserNotifications', () => {
    it('should return user notifications', async () => {
      const userId = 1;
      const mockNotifications = [
        {
          id: 1,
          userId,
          title: 'Test 1',
          message: 'Message 1',
          read: false,
        },
        { id: 2, userId, title: 'Test 2', message: 'Message 2', read: true },
      ];

      mockPrismaService.notification.findMany.mockResolvedValue(mockNotifications);

      const result = await service.getUserNotifications(userId);

      expect(result).toEqual(mockNotifications);
      expect(mockPrismaService.notification.findMany).toHaveBeenCalledWith({
        where: { userId },
        orderBy: { createdAt: 'desc' },
      });
    });
  });

  describe('markAsRead', () => {
    it('should mark notification as read', async () => {
      const id = 1;

      mockPrismaService.notification.updateMany.mockResolvedValue({ count: 1 });

      const result = await service.markAsRead(id);

      expect(result.message).toBe('1 notificação(ões) marcada(s) como lida(s)');
      expect(mockPrismaService.notification.updateMany).toHaveBeenCalledWith({
        where: { id: { in: [id] } },
        data: { read: true },
      });
    });
  });

  describe('markAllAsRead', () => {
    it('should mark all notifications as read', async () => {
      const userId = 1;

      mockPrismaService.notification.updateMany.mockResolvedValue({ count: 5 });

      const result = await service.markAllAsRead(userId);

      expect(result.message).toBe('5 notificação(ões) marcada(s) como lida(s)');
      expect(mockPrismaService.notification.updateMany).toHaveBeenCalledWith({
        where: { userId, read: false },
        data: { read: true },
      });
    });
  });

  describe('countUnread', () => {
    it('should return unread count', async () => {
      const userId = 1;
      const count = 5;

      mockPrismaService.notification.count.mockResolvedValue(count);

      const result = await service.countUnread(userId);

      expect(result).toEqual(count);
      expect(mockPrismaService.notification.count).toHaveBeenCalledWith({
        where: { userId, read: false },
      });
    });
  });

  describe('deleteNotification', () => {
    it('should delete a notification', async () => {
      const id = 1;
      const mockNotification = {
        id,
        userId: 1,
        title: 'Test',
        message: 'Message',
      };

      mockPrismaService.notification.findUnique.mockResolvedValue(mockNotification);
      mockPrismaService.notification.delete.mockResolvedValue(mockNotification);

      const result = await service.deleteNotification(id);

      expect(result).toEqual({ message: 'Notificação deletada com sucesso' });
      expect(mockPrismaService.notification.findUnique).toHaveBeenCalledWith({
        where: { id },
      });
      expect(mockPrismaService.notification.delete).toHaveBeenCalledWith({
        where: { id },
      });
    });
  });

  describe('deleteReadNotifications', () => {
    it('should delete all read notifications', async () => {
      const userId = 1;

      mockPrismaService.notification.deleteMany.mockResolvedValue({ count: 3 });

      const result = await service.deleteReadNotifications(userId);

      expect(result.message).toBe('3 notificação(ões) lida(s) deletada(s) com sucesso');
      expect(mockPrismaService.notification.deleteMany).toHaveBeenCalledWith({
        where: { userId, read: true },
      });
    });
  });

  describe('subscribeDeviceToTopics', () => {
    it('should subscribe device to topics', async () => {
      const fcmToken = 'valid-token-123456789012345';
      const topics = ['news', 'alerts'];

      mockNotificationHandler.subscribeToTopic
        .mockResolvedValueOnce({ success: true })
        .mockResolvedValueOnce({ success: true });

      const result = await service.subscribeDeviceToTopics(fcmToken, topics);

      expect(result.success).toEqual(topics);
      expect(result.failed).toEqual([]);
    });

    it('should handle failed subscriptions', async () => {
      const fcmToken = 'valid-token-123456789012345';
      const topics = ['news', 'alerts'];

      mockNotificationHandler.subscribeToTopic
        .mockResolvedValueOnce({ success: true })
        .mockRejectedValueOnce(new Error('Failed'));

      const result = await service.subscribeDeviceToTopics(fcmToken, topics);

      expect(result.success).toEqual(['news']);
      expect(result.failed).toEqual(['alerts']);
    });
  });

  describe('sendToTopic', () => {
    it('should throw BadRequestException if topic is empty', async () => {
      await expect(service.sendToTopic('', 'Title', 'Body')).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should send notification to topic', async () => {
      const topic = 'news';
      const title = 'Test';
      const body = 'Test message';

      mockNotificationHandler.sendNotification.mockResolvedValue({
        success: true,
        messageId: 'msg-123',
      });

      const result = await service.sendToTopic(topic, title, body);

      expect(result.messageId).toBe('msg-123');
      expect(result.topic).toBe(topic);
      expect(mockNotificationHandler.sendNotification).toHaveBeenCalledWith({
        topic,
        title,
        body,
        data: {},
      });
    });
  });
});
