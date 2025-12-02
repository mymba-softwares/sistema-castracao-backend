import { Test, TestingModule } from '@nestjs/testing';
import { NotificationHandler } from './notification.handler';
import * as firebaseConfig from './firebase/firebase-admin.config';

jest.mock('../firebase/firebase-admin.config', () => ({
  messaging: {
    send: jest.fn(),
    sendEachForMulticast: jest.fn(),
    subscribeToTopic: jest.fn(),
    unsubscribeFromTopic: jest.fn(),
  },
}));

describe('NotificationHandler', () => {
  let handler: NotificationHandler;
  let mockMessaging: any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificationHandler],
    }).compile();

    handler = module.get<NotificationHandler>(NotificationHandler);
    mockMessaging = firebaseConfig.messaging;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(handler).toBeDefined();
  });

  describe('sendNotification', () => {
    it('should send notification to token', async () => {
      const notificationData = {
        token: 'test-token',
        title: 'Test Title',
        body: 'Test Body',
      };

      mockMessaging.send.mockResolvedValue('message-id-123');

      const result = await handler.sendNotification(notificationData);

      expect(result.success).toBe(true);
      expect(result.messageId).toBe('message-id-123');
      expect(mockMessaging.send).toHaveBeenCalledWith({
        notification: {
          title: 'Test Title',
          body: 'Test Body',
        },
        data: {},
        token: 'test-token',
      });
    });

    it('should send notification to topic', async () => {
      const notificationData = {
        topic: 'test-topic',
        title: 'Test Title',
        body: 'Test Body',
        data: { key: 'value' },
      };

      mockMessaging.send.mockResolvedValue('message-id-456');

      const result = await handler.sendNotification(notificationData);

      expect(result.success).toBe(true);
      expect(result.messageId).toBe('message-id-456');
      expect(mockMessaging.send).toHaveBeenCalledWith({
        notification: {
          title: 'Test Title',
          body: 'Test Body',
        },
        data: { key: 'value' },
        topic: 'test-topic',
      });
    });

    it('should include image URL if provided', async () => {
      const notificationData = {
        token: 'test-token',
        title: 'Test Title',
        body: 'Test Body',
        imageUrl: 'https://example.com/image.jpg',
      };

      mockMessaging.send.mockResolvedValue('message-id-789');

      await handler.sendNotification(notificationData);

      expect(mockMessaging.send).toHaveBeenCalledWith({
        notification: {
          title: 'Test Title',
          body: 'Test Body',
          imageUrl: 'https://example.com/image.jpg',
        },
        data: {},
        token: 'test-token',
      });
    });

    it('should throw error if neither token nor topic provided', async () => {
      const notificationData = {
        title: 'Test Title',
        body: 'Test Body',
      };

      await expect(handler.sendNotification(notificationData as any)).rejects.toThrow(
        'Token ou tópico deve ser fornecido',
      );
    });

    it('should handle send errors', async () => {
      const notificationData = {
        token: 'test-token',
        title: 'Test Title',
        body: 'Test Body',
      };

      mockMessaging.send.mockRejectedValue(new Error('FCM error'));

      await expect(handler.sendNotification(notificationData)).rejects.toThrow(
        'FCM error',
      );
    });
  });

  describe('sendMulticast', () => {
    it('should send multicast successfully', async () => {
      const tokens = ['token1', 'token2', 'token3'];
      const title = 'Test Title';
      const body = 'Test Body';

      mockMessaging.sendEachForMulticast.mockResolvedValue({
        successCount: 3,
        failureCount: 0,
        responses: [
          { success: true },
          { success: true },
          { success: true },
        ],
      });

      const result = await handler.sendMulticast(tokens, title, body);

      expect(result.successCount).toBe(3);
      expect(result.failureCount).toBe(0);
      expect(result.failedTokens).toEqual([]);
    });

    it('should handle partial failures', async () => {
      const tokens = ['token1', 'token2', 'token3'];
      const title = 'Test Title';
      const body = 'Test Body';

      mockMessaging.sendEachForMulticast.mockResolvedValue({
        successCount: 2,
        failureCount: 1,
        responses: [
          { success: true },
          { success: false, error: new Error('Invalid token') },
          { success: true },
        ],
      });

      const result = await handler.sendMulticast(tokens, title, body);

      expect(result.successCount).toBe(2);
      expect(result.failureCount).toBe(1);
      expect(result.failedTokens).toEqual(['token2']);
    });

    it('should return empty result for empty token array', async () => {
      const result = await handler.sendMulticast([], 'Title', 'Body');

      expect(result.successCount).toBe(0);
      expect(result.failureCount).toBe(0);
      expect(result.failedTokens).toEqual([]);
      expect(mockMessaging.sendEachForMulticast).not.toHaveBeenCalled();
    });

    it('should include data in multicast', async () => {
      const tokens = ['token1'];
      const data = { key: 'value' };

      mockMessaging.sendEachForMulticast.mockResolvedValue({
        successCount: 1,
        failureCount: 0,
        responses: [{ success: true }],
      });

      await handler.sendMulticast(tokens, 'Title', 'Body', data);

      expect(mockMessaging.sendEachForMulticast).toHaveBeenCalledWith({
        notification: { title: 'Title', body: 'Body' },
        data: { key: 'value' },
        tokens: ['token1'],
      });
    });
  });

  describe('subscribeToTopic', () => {
    it('should subscribe token to topic', async () => {
      const token = 'test-token';
      const topic = 'test-topic';

      mockMessaging.subscribeToTopic.mockResolvedValue({});

      const result = await handler.subscribeToTopic(token, topic);

      expect(result.success).toBe(true);
      expect(mockMessaging.subscribeToTopic).toHaveBeenCalledWith(token, topic);
    });

    it('should handle subscription errors', async () => {
      const token = 'test-token';
      const topic = 'test-topic';

      mockMessaging.subscribeToTopic.mockRejectedValue(new Error('Subscribe failed'));

      await expect(handler.subscribeToTopic(token, topic)).rejects.toThrow(
        'Subscribe failed',
      );
    });
  });

  describe('unsubscribeFromTopic', () => {
    it('should unsubscribe token from topic', async () => {
      const token = 'test-token';
      const topic = 'test-topic';

      mockMessaging.unsubscribeFromTopic.mockResolvedValue({});

      const result = await handler.unsubscribeFromTopic(token, topic);

      expect(result.success).toBe(true);
      expect(mockMessaging.unsubscribeFromTopic).toHaveBeenCalledWith(token, topic);
    });

    it('should handle unsubscription errors', async () => {
      const token = 'test-token';
      const topic = 'test-topic';

      mockMessaging.unsubscribeFromTopic.mockRejectedValue(
        new Error('Unsubscribe failed'),
      );

      await expect(handler.unsubscribeFromTopic(token, topic)).rejects.toThrow(
        'Unsubscribe failed',
      );
    });
  });

  describe('subscribeToTopics', () => {
    it('should subscribe multiple tokens to topic', async () => {
      const tokens = ['token1', 'token2'];
      const topic = 'test-topic';

      mockMessaging.subscribeToTopic.mockResolvedValue({});

      const result = await handler.subscribeToTopics(tokens, topic);

      expect(result.success).toBe(true);
      expect(mockMessaging.subscribeToTopic).toHaveBeenCalledWith(tokens, topic);
    });
  });

  describe('unsubscribeFromTopics', () => {
    it('should unsubscribe multiple tokens from topic', async () => {
      const tokens = ['token1', 'token2'];
      const topic = 'test-topic';

      mockMessaging.unsubscribeFromTopic.mockResolvedValue({});

      const result = await handler.unsubscribeFromTopics(tokens, topic);

      expect(result.success).toBe(true);
      expect(mockMessaging.unsubscribeFromTopic).toHaveBeenCalledWith(tokens, topic);
    });
  });
});
