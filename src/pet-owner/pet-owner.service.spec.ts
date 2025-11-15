import { Test, TestingModule } from '@nestjs/testing';
import { PetOwnerService } from './pet-owner.service';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException, ConflictException } from '@nestjs/common';
import { Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

describe('PetOwnerService', () => {
  let service: PetOwnerService;
  let prismaService: PrismaService;

  const mockUser = {
    id: 1,
    email: 'petowner@example.com',
    hashedPassword: '$2b$10$hashedpassword',
    completeName: 'Pet Owner',
    cpf: '12345678901',
    phone: '1234567890',
    role: Role.petOwner,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mockPetOwner = {
    id: 1,
    userId: 1,
    fullAddress: '123 Test St',
    documentUrl: 'http://example.com/doc.pdf',
    createdAt: new Date(),
    updatedAt: new Date(),
    user: {
      completeName: 'Pet Owner',
      email: 'petowner@example.com',
      cpf: '12345678901',
      phone: '1234567890',
    },
    _count: {
      animals: 2,
    },
  };

  const mockPrismaService = {
    petOwner: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
      findFirst: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
    },
    user: {
      findUnique: jest.fn(),
      findFirst: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    animal: {
      findMany: jest.fn(),
    },
    commitmentTerm: {
      create: jest.fn(),
    },
    $transaction: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PetOwnerService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<PetOwnerService>(PetOwnerService);
    prismaService = module.get<PrismaService>(PrismaService);

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAllPetOwners', () => {
    it('should return an array of pet owners', async () => {
      const petOwners = [mockPetOwner];
      mockPrismaService.petOwner.findMany.mockResolvedValue(petOwners);

      const result = await service.findAllPetOwners();

      expect(result).toEqual(petOwners);
      expect(prismaService.petOwner.findMany).toHaveBeenCalled();
    });
  });

  describe('findPetOwnerById', () => {
    it('should return a pet owner by userId', async () => {
      mockPrismaService.petOwner.findUnique.mockResolvedValue(mockPetOwner);

      const result = await service.findPetOwnerById(1);

      expect(result).toEqual(mockPetOwner);
      expect(prismaService.petOwner.findUnique).toHaveBeenCalledWith({
        where: { userId: 1 },
        include: expect.any(Object),
      });
    });

    it('should throw NotFoundException when pet owner not found', async () => {
      mockPrismaService.petOwner.findUnique.mockResolvedValue(null);

      await expect(service.findPetOwnerById(999)).rejects.toThrow(NotFoundException);
    });
  });

  describe('findPetOwnerByEmail', () => {
    it('should return a pet owner by email', async () => {
      mockPrismaService.petOwner.findFirst.mockResolvedValue(mockPetOwner);

      const result = await service.findPetOwnerByEmail('petowner@example.com');

      expect(result).toEqual(mockPetOwner);
    });

    it('should throw NotFoundException when pet owner not found', async () => {
      mockPrismaService.petOwner.findFirst.mockResolvedValue(null);

      await expect(service.findPetOwnerByEmail('nonexistent@example.com')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('createPetOwner', () => {
    it('should create a pet owner successfully', async () => {
      const createDto = {
        fullAddress: '123 Test St',
        documentUrl: 'http://example.com/doc.pdf',
      };

      mockPrismaService.user.findUnique.mockResolvedValue(mockUser);
      mockPrismaService.petOwner.create.mockResolvedValue(mockPetOwner);

      const result = await service.createPetOwner(1, createDto);

      expect(result).toEqual(mockPetOwner);
      expect(prismaService.petOwner.create).toHaveBeenCalled();
    });

    it('should throw NotFoundException when user not found', async () => {
      const createDto = {
        fullAddress: '123 Test St',
        documentUrl: 'http://example.com/doc.pdf',
      };

      mockPrismaService.user.findUnique.mockResolvedValue(null);

      await expect(service.createPetOwner(999, createDto)).rejects.toThrow(NotFoundException);
    });
  });

  describe('updatePetOwner', () => {
    it('should update a pet owner successfully', async () => {
      const updateDto = {
        fullAddress: '456 New St',
        phone: '9999999999',
      };

      mockPrismaService.petOwner.findUnique.mockResolvedValue(mockPetOwner);
      mockPrismaService.user.findFirst.mockResolvedValue(null);
      mockPrismaService.$transaction.mockImplementation(async (callback) => {
        return callback(mockPrismaService);
      });

      await service.updatePetOwner(1, updateDto);

      expect(prismaService.$transaction).toHaveBeenCalled();
    });

    it('should throw NotFoundException when pet owner not found', async () => {
      mockPrismaService.petOwner.findUnique.mockResolvedValue(null);

      await expect(service.updatePetOwner(999, { fullAddress: 'Test' })).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw ConflictException when email already in use', async () => {
      const updateDto = { email: 'existing@example.com' };

      mockPrismaService.petOwner.findUnique.mockResolvedValue(mockPetOwner);
      mockPrismaService.user.findFirst.mockResolvedValue({ id: 2 });

      await expect(service.updatePetOwner(1, updateDto)).rejects.toThrow(ConflictException);
    });
  });

  describe('deletePetOwner', () => {
    it('should delete a pet owner successfully', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue(mockUser);
      mockPrismaService.user.delete.mockResolvedValue(mockUser);

      const result = await service.deletePetOwner(1);

      expect(result.message).toBe(
        'Usuário e todos os dados relacionados foram deletados com sucesso.',
      );
      expect(prismaService.user.delete).toHaveBeenCalledWith({ where: { id: 1 } });
    });

    it('should throw NotFoundException when user not found', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue(null);

      await expect(service.deletePetOwner(999)).rejects.toThrow(NotFoundException);
    });
  });

  describe('findAnimalsByPetOwnerId', () => {
    it('should return animals of a pet owner', async () => {
      const animals = [
        { id: 1, name: 'Dog', species: 'canine' },
        { id: 2, name: 'Cat', species: 'feline' },
      ];

      mockPrismaService.petOwner.findUnique.mockResolvedValue({ ...mockPetOwner, id: 1 });
      mockPrismaService.animal.findMany.mockResolvedValue(animals);

      const result = await service.findAnimalsByPetOwnerId(1);

      expect(result).toEqual(animals);
      expect(prismaService.animal.findMany).toHaveBeenCalledWith({
        where: { petOwnerId: 1 },
      });
    });

    it('should throw NotFoundException when pet owner not found', async () => {
      mockPrismaService.petOwner.findUnique.mockResolvedValue(null);

      await expect(service.findAnimalsByPetOwnerId(999)).rejects.toThrow(NotFoundException);
    });
  });
});
