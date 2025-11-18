import { Module, forwardRef } from '@nestjs/common';
import { PetOwnerService } from './pet-owner.service';
import { PetOwnerController } from './pet-owner.controller';
import { AppointmentModule } from '../appointment/appointment.module';

@Module({
  imports: [forwardRef(() => AppointmentModule)],
  controllers: [PetOwnerController],
  providers: [PetOwnerService],
  exports: [PetOwnerService],
})
export class PetOwnerModule {}
