import { Test, TestingModule } from '@nestjs/testing';
import { AnestheticRecordService } from './anesthetic-record.service';
import { PrismaService } from '../prisma/prisma.service';

describe('AnestheticRecordService', () => {
  let service: AnestheticRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnestheticRecordService, PrismaService],
    }).compile();

    service = module.get<AnestheticRecordService>(AnestheticRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
