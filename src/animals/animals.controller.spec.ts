import { Test, TestingModule } from '@nestjs/testing';
import { AnimalsController } from './animals.controller';
import { AnimalsService } from './animals.service';

const mockAnimalsService = {
  findAllAnimals: jest.fn(),
  findAnimalById: jest.fn(),
  createAnimal: jest.fn(),
  updateAnimal: jest.fn(),
  deleteAnimal: jest.fn(),
};

describe('AnimalsController', () => {
  let controller: AnimalsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimalsController],
      providers: [
        {
          provide: AnimalsService,
          useValue: mockAnimalsService,
        },
      ],
    }).compile();

    controller = module.get<AnimalsController>(AnimalsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
