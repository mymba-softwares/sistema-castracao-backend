import { Test, TestingModule } from '@nestjs/testing';
import { PetOwnerController } from './pet-owner.controller';
import { PetOwnerService } from './pet-owner.service';

const mockPetOwnerService = {
  findAllPetOwners: jest.fn(),
  findPetOwnerById: jest.fn(),
  findPetOwnerByEmail: jest.fn(),
  createPetOwner: jest.fn(),
  updatePetOwner: jest.fn(),
  deletePetOwner: jest.fn(),
  findAnimalsByPetOwnerId: jest.fn(),
};

describe('PetOwnerController', () => {
  let controller: PetOwnerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetOwnerController],
      providers: [
        {
          provide: PetOwnerService,
          useValue: mockPetOwnerService,
        },
      ],
    }).compile();

    controller = module.get<PetOwnerController>(PetOwnerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
