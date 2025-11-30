import { Module } from '@nestjs/common';
import { AnestheticRecordService } from './anesthetic-record.service';
import { AnestheticRecordController } from './anesthetic-record.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AnestheticRecordController],
  providers: [AnestheticRecordService],
  exports: [AnestheticRecordService],
})
export class AnestheticRecordModule {}
