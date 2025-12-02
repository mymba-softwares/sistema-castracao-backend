import { Test, TestingModule } from '@nestjs/testing';
import { SurgicalRecordController } from './surgical-record.controller';
import { SurgicalRecordService } from './surgical-record.service';
import { PrismaService } from '../prisma/prisma.service';

describe('SurgicalRecordController', () => {
  let controller: SurgicalRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurgicalRecordController],
      providers: [SurgicalRecordService, PrismaService],
    }).compile();

    controller = module.get<SurgicalRecordController>(SurgicalRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
