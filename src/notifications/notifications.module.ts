import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { NotificationHandler } from './notification.handler';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [NotificationsService, NotificationHandler],
  controllers: [NotificationsController],
  exports: [NotificationsService, NotificationHandler],
})
export class NotificationsModule {}
