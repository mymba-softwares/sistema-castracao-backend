import { Test, TestingModule } from '@nestjs/testing';
import { VeterinarianService } from './veterinarian.service';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException, ConflictException } from '@nestjs/common';
import { Role } from '@prisma/client';

describe('VeterinarianService', () => {
  let service: VeterinarianService;
  let prismaService: PrismaService;

  const mockUser = {
    id: 1,
    email: 'vet@example.com',
    hashedPassword: '$2b$10$hashedpassword',
    completeName: 'Dr. Veterinarian',
    cpf: '12345678901',
    phone: '1234567890',
    role: Role.veterinarian,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mockVeterinarian = {
    id: 1,
    userId: 1,
    crmv: 'CRMV-12345',
    active: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    user: {
      completeName: 'Dr. Veterinarian',
      email: 'vet@example.com',
      cpf: '12345678901',
      phone: '1234567890',
    },
  };

  const mockPrismaService = {
    veterinarian: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
      findFirst: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
    },
    user: {
      findUnique: jest.fn(),
      findFirst: jest.fn(),
      delete: jest.fn(),
    },
    $transaction: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VeterinarianService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<VeterinarianService>(VeterinarianService);
    prismaService = module.get<PrismaService>(PrismaService);

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAllVeterinarians', () => {
    it('should return an array of veterinarians', async () => {
      const veterinarians = [mockVeterinarian];
      mockPrismaService.veterinarian.findMany.mockResolvedValue(veterinarians);

      const result = await service.findAllVeterinarians();

      expect(result).toEqual(veterinarians);
      expect(prismaService.veterinarian.findMany).toHaveBeenCalled();
    });
  });

  describe('findVeterinarianById', () => {
    it('should return a veterinarian by userId', async () => {
      mockPrismaService.veterinarian.findUnique.mockResolvedValue(mockVeterinarian);

      const result = await service.findVeterinarianById(1);

      expect(result).toEqual(mockVeterinarian);
      expect(prismaService.veterinarian.findUnique).toHaveBeenCalledWith({
        where: { userId: 1 },
        include: expect.any(Object),
      });
    });

    it('should throw NotFoundException when veterinarian not found', async () => {
      mockPrismaService.veterinarian.findUnique.mockResolvedValue(null);

      await expect(service.findVeterinarianById(999)).rejects.toThrow(NotFoundException);
    });
  });

  describe('findVeterinarianByEmail', () => {
    it('should return a veterinarian by email', async () => {
      mockPrismaService.veterinarian.findFirst.mockResolvedValue(mockVeterinarian);

      const result = await service.findVeterinarianByEmail('vet@example.com');

      expect(result).toEqual(mockVeterinarian);
    });
  });

  describe('createVeterinarian', () => {
    it('should create a veterinarian successfully', async () => {
      const createDto = {
        crmv: 'CRMV-12345',
        active: true,
      };

      mockPrismaService.user.findUnique.mockResolvedValue(mockUser);
      mockPrismaService.veterinarian.create.mockResolvedValue(mockVeterinarian);

      const result = await service.createVeterinarian(1, createDto);

      expect(result).toEqual(mockVeterinarian);
      expect(prismaService.veterinarian.create).toHaveBeenCalled();
    });

    it('should throw NotFoundException when user not found', async () => {
      const createDto = {
        crmv: 'CRMV-12345',
        active: true,
      };

      mockPrismaService.user.findUnique.mockResolvedValue(null);

      await expect(service.createVeterinarian(999, createDto)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('updateVeterinarian', () => {
    it('should update a veterinarian successfully', async () => {
      const updateDto = {
        crmv: 'CRMV-99999',
        active: false,
      };

      mockPrismaService.veterinarian.findUnique.mockResolvedValue(mockVeterinarian);
      mockPrismaService.user.findFirst.mockResolvedValue(null);
      mockPrismaService.$transaction.mockImplementation(async (callback) => {
        return callback(mockPrismaService);
      });

      await service.updateVeterinarian(1, updateDto);

      expect(prismaService.$transaction).toHaveBeenCalled();
    });

    it('should throw NotFoundException when veterinarian not found', async () => {
      mockPrismaService.veterinarian.findUnique.mockResolvedValue(null);

      await expect(service.updateVeterinarian(999, { crmv: 'CRMV-123' })).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should throw ConflictException when email already in use', async () => {
      const updateDto = { email: 'existing@example.com' };

      mockPrismaService.veterinarian.findUnique.mockResolvedValue(mockVeterinarian);
      mockPrismaService.user.findFirst.mockResolvedValue({ id: 2 });

      await expect(service.updateVeterinarian(1, updateDto)).rejects.toThrow(ConflictException);
    });
  });

  describe('deleteVeterinarian', () => {
    it('should delete a veterinarian successfully', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue(mockUser);
      mockPrismaService.user.delete.mockResolvedValue(mockUser);

      const result = await service.deleteVeterinarian(1);

      expect(result.message).toBe('Veterinarian and related data deleted successfully.');
      expect(prismaService.user.delete).toHaveBeenCalledWith({ where: { id: 1 } });
    });

    it('should throw NotFoundException when user not found', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue(null);

      await expect(service.deleteVeterinarian(999)).rejects.toThrow(NotFoundException);
    });
  });
});
