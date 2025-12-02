import { Test, TestingModule } from '@nestjs/testing';
import { SurgicalRecordService } from './surgical-record.service';
import { PrismaService } from '../prisma/prisma.service';

describe('SurgicalRecordService', () => {
  let service: SurgicalRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SurgicalRecordService, PrismaService],
    }).compile();

    service = module.get<SurgicalRecordService>(SurgicalRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
