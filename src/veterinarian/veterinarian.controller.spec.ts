import { Test, TestingModule } from '@nestjs/testing';
import { VeterinarianController } from './veterinarian.controller';
import { VeterinarianService } from './veterinarian.service';

const mockVeterinarianService = {
  findAllVeterinarians: jest.fn(),
  findVeterinarianById: jest.fn(),
  createVeterinarian: jest.fn(),
  updateVeterinarian: jest.fn(),
  deleteVeterinarian: jest.fn(),
};

describe('VeterinarianController', () => {
  let controller: VeterinarianController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VeterinarianController],
      providers: [
        {
          provide: VeterinarianService,
          useValue: mockVeterinarianService,
        },
      ],
    }).compile();

    controller = module.get<VeterinarianController>(VeterinarianController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
