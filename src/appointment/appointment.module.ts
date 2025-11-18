import { Module, forwardRef } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { AnimalsModule } from '../animals/animals.module';
import { PetOwnerModule } from '../pet-owner/pet-owner.module';

@Module({
  imports: [
    PrismaModule,
    AnimalsModule,
    forwardRef(() => PetOwnerModule),
  ],
  controllers: [AppointmentController],
  providers: [AppointmentService],
  exports: [AppointmentService],
})
export class AppointmentModule {}
