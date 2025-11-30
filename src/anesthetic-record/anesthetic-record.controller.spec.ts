import { Test, TestingModule } from '@nestjs/testing';
import { AnestheticRecordController } from './anesthetic-record.controller';
import { AnestheticRecordService } from './anesthetic-record.service';
import { PrismaService } from '../prisma/prisma.service';

describe('AnestheticRecordController', () => {
  let controller: AnestheticRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnestheticRecordController],
      providers: [AnestheticRecordService, PrismaService],
    }).compile();

    controller = module.get<AnestheticRecordController>(AnestheticRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
