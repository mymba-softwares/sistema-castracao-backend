import { Injectable } from '@nestjs/common';
import { messaging } from './firebase/firebase-admin.config';

export interface NotificationData {
  token?: string;
  topic?: string;
  title: string;
  body: string;
  data?: Record<string, string>;
  imageUrl?: string;
}

@Injectable()
export class NotificationHandler {
  async sendNotification(notificationData: NotificationData) {
    const { token, topic, title, body, data, imageUrl } = notificationData;

    if (!token && !topic) {
      throw new Error('Token ou tópico deve ser fornecido');
    }

    const message: any = {
      notification: {
        title,
        body,
      },
      data: data || {},
    };

    if (imageUrl) {
      message.notification.imageUrl = imageUrl;
    }

    if (token) {
      message.token = token;
    } else if (topic) {
      message.topic = topic.startsWith('/topics/') ? topic : `/topics/${topic}`;
    }

    try {
      const response = await messaging.send(message);
      return { success: true, messageId: response };
    } catch (error) {
      console.error('Erro ao enviar notificação:', error);
      throw error;
    }
  }

  async sendMulticast(tokens: string[], title: string, body: string, data?: Record<string, string>) {
    if (tokens.length === 0) {
      return { successCount: 0, failureCount: 0, failedTokens: [] };
    }

    try {
      const response = await messaging.sendEachForMulticast({
        notification: { title, body },
        data: data || {},
        tokens,
      });

      const failedTokens: string[] = [];
      if (response.failureCount > 0) {
        response.responses.forEach((resp, idx) => {
          if (!resp.success) {
            failedTokens.push(tokens[idx]);
          }
        });
      }

      return {
        successCount: response.successCount,
        failureCount: response.failureCount,
        failedTokens,
      };
    } catch (error) {
      console.error('Erro ao enviar multicast:', error);
      throw error;
    }
  }

  async subscribeToTopic(token: string, topic: string) {
    try {
      await messaging.subscribeToTopic(token, topic);
      return { success: true };
    } catch (error) {
      console.error(`Erro ao inscrever no tópico ${topic}:`, error);
      throw error;
    }
  }

  async unsubscribeFromTopic(token: string, topic: string) {
    try {
      await messaging.unsubscribeFromTopic(token, topic);
      return { success: true };
    } catch (error) {
      console.error(`Erro ao desinscrever do tópico ${topic}:`, error);
      throw error;
    }
  }

  async subscribeToTopics(tokens: string[], topic: string) {
    try {
      await messaging.subscribeToTopic(tokens, topic);
      return { success: true };
    } catch (error) {
      console.error(`Erro ao inscrever tokens no tópico ${topic}:`, error);
      throw error;
    }
  }

  async unsubscribeFromTopics(tokens: string[], topic: string) {
    try {
      await messaging.unsubscribeFromTopic(tokens, topic);
      return { success: true };
    } catch (error) {
      console.error(`Erro ao desinscrever tokens do tópico ${topic}:`, error);
      throw error;
    }
  }
}
