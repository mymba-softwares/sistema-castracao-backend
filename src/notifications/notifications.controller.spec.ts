import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';

describe('NotificationsController', () => {
  let controller: NotificationsController;
  let service: NotificationsService;

  const mockNotificationsService = {
    registerDevice: jest.fn(),
    removeDevice: jest.fn(),
    createNotification: jest.fn(),
    sendPushNotification: jest.fn(),
    sendNotificationByRole: jest.fn(),
    getUserNotifications: jest.fn(),
    countUnread: jest.fn(),
    markAsRead: jest.fn(),
    markAllAsRead: jest.fn(),
    deleteNotification: jest.fn(),
    deleteReadNotifications: jest.fn(),
    sendToTopic: jest.fn(),
    subscribeDeviceToTopics: jest.fn(),
    unsubscribeDeviceFromTopics: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificationsController],
      providers: [
        {
          provide: NotificationsService,
          useValue: mockNotificationsService,
        },
      ],
    }).compile();

    controller = module.get<NotificationsController>(NotificationsController);
    service = module.get<NotificationsService>(NotificationsService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('registerDevice', () => {
    it('should register a device', async () => {
      const dto = {
        userId: 1,
        fcmToken: 'valid-token-123456789012345',
        deviceInfo: 'iPhone 14',
      };
      const expectedResult = {
        message: 'Token FCM registrado com sucesso',
        device: { id: 1, ...dto },
      };

      mockNotificationsService.registerDevice.mockResolvedValue(expectedResult);

      const result = await controller.registerDevice(dto);

      expect(result).toEqual(expectedResult);
      expect(service.registerDevice).toHaveBeenCalledWith(dto);
    });
  });

  describe('removeDevice', () => {
    it('should remove a device', async () => {
      const userId = 1;
      const fcmToken = 'valid-token-123456789012345';
      const expectedResult = { message: 'Dispositivo removido com sucesso' };

      mockNotificationsService.removeDevice.mockResolvedValue(expectedResult);

      const result = await controller.removeDevice(userId, fcmToken);

      expect(result).toEqual(expectedResult);
      expect(service.removeDevice).toHaveBeenCalledWith(userId, fcmToken);
    });
  });

  describe('createNotification', () => {
    it('should create a notification', async () => {
      const dto = {
        userId: 1,
        title: 'Test',
        message: 'Test message',
        metadata: { key: 'value' },
      };
      const expectedResult = { id: 1, ...dto, read: false };

      mockNotificationsService.createNotification.mockResolvedValue(expectedResult);

      const result = await controller.createNotification(dto);

      expect(result).toEqual(expectedResult);
      expect(service.createNotification).toHaveBeenCalledWith(dto);
    });
  });

  describe('sendPushNotification', () => {
    it('should send push notification', async () => {
      const dto = {
        userIds: [1, 2],
        title: 'Test',
        body: 'Test message',
      };
      const expectedResult = { success: [], failed: [] };

      mockNotificationsService.sendPushNotification.mockResolvedValue(expectedResult);

      const result = await controller.sendPushNotification(dto as any);

      expect(result).toEqual(expectedResult);
      expect(service.sendPushNotification).toHaveBeenCalledWith(dto);
    });
  });

  describe('sendByRole', () => {
    it('should send notification by role', async () => {
      const dto = {
        role: 'veterinarian',
        title: 'Test',
        message: 'Test message',
      };
      const expectedResult = {
        message: 'Notificação enviada via tópico role_veterinarian',
        messageId: 'msg-123',
        usersNotified: 5,
      };

      mockNotificationsService.sendNotificationByRole.mockResolvedValue(expectedResult);

      const result = await controller.sendByRole(dto);

      expect(result).toEqual(expectedResult);
      expect(service.sendNotificationByRole).toHaveBeenCalledWith(
        dto.role,
        dto.title,
        dto.message,
        undefined,
      );
    });
  });

  describe('getUserNotifications', () => {
    it('should get user notifications', async () => {
      const userId = 1;
      const expectedResult = [
        { id: 1, userId, title: 'Test 1', message: 'Message 1' },
        { id: 2, userId, title: 'Test 2', message: 'Message 2' },
      ];

      mockNotificationsService.getUserNotifications.mockResolvedValue(expectedResult);

      const result = await controller.getUserNotifications(userId, undefined);

      expect(result).toEqual(expectedResult);
      expect(service.getUserNotifications).toHaveBeenCalledWith(userId, undefined);
    });
  });

  describe('countUnread', () => {
    it('should get unread count', async () => {
      const userId = 1;
      const expectedResult = 5;

      mockNotificationsService.countUnread.mockResolvedValue(expectedResult);

      const result = await controller.countUnread(userId);

      expect(result).toEqual(expectedResult);
      expect(service.countUnread).toHaveBeenCalledWith(userId);
    });
  });

  describe('markAsRead', () => {
    it('should mark notification as read', async () => {
      const dto = { notificationIds: [1, 2] };
      const expectedResult = { message: '2 notificação(ões) marcada(s) como lida(s)' };

      mockNotificationsService.markAsRead.mockResolvedValue(expectedResult);

      const result = await controller.markAsRead(dto as any);

      expect(result).toEqual(expectedResult);
      expect(service.markAsRead).toHaveBeenCalledWith(dto.notificationIds);
    });
  });

  describe('markAllAsRead', () => {
    it('should mark all notifications as read', async () => {
      const userId = 1;
      const expectedResult = {
        message: 'Todas as notificações foram marcadas como lidas',
      };

      mockNotificationsService.markAllAsRead.mockResolvedValue(expectedResult);

      const result = await controller.markAllAsRead(userId);

      expect(result).toEqual(expectedResult);
      expect(service.markAllAsRead).toHaveBeenCalledWith(userId);
    });
  });

  describe('deleteNotification', () => {
    it('should delete notification', async () => {
      const id = 1;
      const expectedResult = { message: 'Notificação deletada com sucesso' };

      mockNotificationsService.deleteNotification.mockResolvedValue(expectedResult);

      const result = await controller.deleteNotification(id);

      expect(result).toEqual(expectedResult);
      expect(service.deleteNotification).toHaveBeenCalledWith(id);
    });
  });

  describe('deleteReadNotifications', () => {
    it('should delete all read notifications', async () => {
      const userId = 1;
      const expectedResult = { message: '3 notificação(ões) lida(s) deletada(s) com sucesso' };

      mockNotificationsService.deleteReadNotifications.mockResolvedValue(expectedResult);

      const result = await controller.deleteReadNotifications(userId);

      expect(result).toEqual(expectedResult);
      expect(service.deleteReadNotifications).toHaveBeenCalledWith(userId);
    });
  });

  describe('sendToTopic', () => {
    it('should send notification to topic', async () => {
      const dto = {
        topic: 'news',
        title: 'Test',
        body: 'Test message',
      };
      const expectedResult = { messageId: 'msg-123', topic: 'news' };

      mockNotificationsService.sendToTopic.mockResolvedValue(expectedResult);

      const result = await controller.sendToTopic(dto);

      expect(result).toEqual(expectedResult);
      expect(service.sendToTopic).toHaveBeenCalledWith(
        dto.topic,
        dto.title,
        dto.body,
        undefined,
      );
    });
  });

  describe('subscribeToTopics', () => {
    it('should subscribe device to topics', async () => {
      const dto = {
        fcmToken: 'valid-token-123456789012345',
        topics: ['news', 'alerts'],
      };
      const expectedResult = {
        success: ['news', 'alerts'],
        failed: [],
      };

      mockNotificationsService.subscribeDeviceToTopics.mockResolvedValue(expectedResult);

      const result = await controller.subscribeToTopics(dto);

      expect(result).toEqual(expectedResult);
      expect(service.subscribeDeviceToTopics).toHaveBeenCalledWith(
        dto.fcmToken,
        dto.topics,
      );
    });
  });

  describe('unsubscribeFromTopics', () => {
    it('should unsubscribe device from topics', async () => {
      const dto = {
        fcmToken: 'valid-token-123456789012345',
        topics: ['news'],
      };
      const expectedResult = {
        success: ['news'],
        failed: [],
      };

      mockNotificationsService.unsubscribeDeviceFromTopics.mockResolvedValue(
        expectedResult,
      );

      const result = await controller.unsubscribeFromTopics(dto);

      expect(result).toEqual(expectedResult);
      expect(service.unsubscribeDeviceFromTopics).toHaveBeenCalledWith(
        dto.fcmToken,
        dto.topics,
      );
    });
  });
});
