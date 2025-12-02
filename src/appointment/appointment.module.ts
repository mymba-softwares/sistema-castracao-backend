import { Module, forwardRef } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { AppointmentNotificationsService } from './appointment-notifications.service';
import { PrismaModule } from '../prisma/prisma.module';
import { AnimalsModule } from '../animals/animals.module';
import { PetOwnerModule } from '../pet-owner/pet-owner.module';
import { NotificationsModule } from '../notifications/notifications.module';

@Module({
  imports: [
    PrismaModule,
    AnimalsModule,
    forwardRef(() => PetOwnerModule),
    NotificationsModule,
  ],
  controllers: [AppointmentController],
  providers: [AppointmentService, AppointmentNotificationsService],
  exports: [AppointmentService],
})
export class AppointmentModule {}
