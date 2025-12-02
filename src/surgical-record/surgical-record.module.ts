import { Module } from '@nestjs/common';
import { SurgicalRecordService } from './surgical-record.service';
import { SurgicalRecordController } from './surgical-record.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SurgicalRecordController],
  providers: [SurgicalRecordService],
  exports: [SurgicalRecordService],
})
export class SurgicalRecordModule {}
