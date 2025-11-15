import { Test, TestingModule } from '@nestjs/testing';
import { AnimalsService } from './animals.service';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException, ConflictException } from '@nestjs/common';
import { Species, Gender } from '@prisma/client';

describe('AnimalsService', () => {
  let service: AnimalsService;
  let prismaService: PrismaService;

  const mockAnimal = {
    id: 1,
    name: 'Rex',
    species: Species.canine,
    breed: 'Labrador',
    gender: Gender.male,
    age: 3,
    weight: 25.5,
    color: 'Golden',
    microchipNumber: '123456789',
    petOwnerId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    petOwner: {
      id: 1,
      userId: 1,
      fullAddress: '123 Test St',
    },
  };

  const mockPrismaService = {
    animal: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AnimalsService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<AnimalsService>(AnimalsService);
    prismaService = module.get<PrismaService>(PrismaService);

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAllAnimals', () => {
    it('should return an array of animals', async () => {
      const animals = [mockAnimal];
      mockPrismaService.animal.findMany.mockResolvedValue(animals);

      const result = await service.findAllAnimals();

      expect(result).toEqual(animals);
      expect(prismaService.animal.findMany).toHaveBeenCalled();
    });
  });

  describe('findAnimalById', () => {
    it('should return an animal by id', async () => {
      mockPrismaService.animal.findUnique.mockResolvedValue(mockAnimal);

      const result = await service.findAnimalById(1);

      expect(result).toEqual(mockAnimal);
      expect(prismaService.animal.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
        include: expect.any(Object),
      });
    });

    it('should throw NotFoundException when animal not found', async () => {
      mockPrismaService.animal.findUnique.mockResolvedValue(null);

      await expect(service.findAnimalById(999)).rejects.toThrow(NotFoundException);
    });
  });

  describe('createAnimal', () => {
    it('should create an animal successfully', async () => {
      const createDto = {
        name: 'Rex',
        species: Species.canine,
        breed: 'Labrador',
        gender: Gender.male,
        age: 3,
        weight: 25.5,
        color: 'Golden',
        microchipNumber: '123456789',
        petOwnerId: 1,
      };

      mockPrismaService.animal.findUnique.mockResolvedValue(null);
      mockPrismaService.animal.create.mockResolvedValue(mockAnimal);

      const result = await service.createAnimal(createDto);

      expect(result).toEqual(mockAnimal);
      expect(prismaService.animal.create).toHaveBeenCalled();
    });

    it('should create animal without microchip number', async () => {
      const createDto = {
        name: 'Rex',
        species: Species.canine,
        breed: 'Labrador',
        gender: Gender.male,
        age: 3,
        weight: 25.5,
        color: 'Golden',
        microchipNumber: '',
        petOwnerId: 1,
      };

      mockPrismaService.animal.create.mockResolvedValue({ ...mockAnimal, microchipNumber: null });

      const result = await service.createAnimal(createDto);

      expect(result.microchipNumber).toBeNull();
    });

    it('should throw ConflictException when microchip already exists', async () => {
      const createDto = {
        name: 'Rex',
        species: Species.canine,
        breed: 'Labrador',
        gender: Gender.male,
        age: 3,
        weight: 25.5,
        color: 'Golden',
        microchipNumber: '123456789',
        petOwnerId: 1,
      };

      mockPrismaService.animal.findUnique.mockResolvedValue({ id: 1 });

      await expect(service.createAnimal(createDto)).rejects.toThrow(ConflictException);
    });
  });

  describe('updateAnimal', () => {
    it('should update an animal successfully', async () => {
      const updateDto = {
        name: 'Rex Updated',
        age: 4,
      };

      const updatedAnimal = { ...mockAnimal, ...updateDto };

      mockPrismaService.animal.findUnique.mockResolvedValue(mockAnimal);
      mockPrismaService.animal.update.mockResolvedValue(updatedAnimal);
      // Depois do update, findUnique deve retornar o animal atualizado
      mockPrismaService.animal.findUnique.mockResolvedValueOnce(mockAnimal).mockResolvedValue(updatedAnimal);

      const result = await service.updateAnimal(1, updateDto);

      expect(result.name).toBe('Rex Updated');
      expect(prismaService.animal.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: expect.any(Object),
      });
    });

    it('should throw NotFoundException when animal not found', async () => {
      mockPrismaService.animal.findUnique.mockResolvedValue(null);

      await expect(service.updateAnimal(999, { name: 'Test' })).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('deleteAnimal', () => {
    it('should delete an animal successfully', async () => {
      mockPrismaService.animal.findUnique.mockResolvedValue(mockAnimal);
      mockPrismaService.animal.delete.mockResolvedValue(mockAnimal);

      const result = await service.deleteAnimal(1);

      expect(result).toEqual({ message: 'Animal deleted successfully' });
      expect(prismaService.animal.delete).toHaveBeenCalledWith({ where: { id: 1 } });
    });

    it('should throw NotFoundException when animal not found', async () => {
      mockPrismaService.animal.findUnique.mockResolvedValue(null);

      await expect(service.deleteAnimal(999)).rejects.toThrow(NotFoundException);
    });
  });
});
