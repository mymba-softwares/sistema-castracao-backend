import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';
import { Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

// Mock bcrypt
jest.mock('bcrypt');
const mockedBcrypt = bcrypt as jest.Mocked<typeof bcrypt>;

describe('UserService', () => {
  let service: UserService;
  let prismaService: PrismaService;

  const mockUser = {
    id: 1,
    email: 'test@example.com',
    hashedPassword: '$2b$10$hashedpassword',
    completeName: 'Test User',
    cpf: '12345678901',
    phone: '1234567890',
    role: Role.administrator,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mockPrismaService = {
    user: {
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    prismaService = module.get<PrismaService>(PrismaService);

    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a user successfully', async () => {
      const createUserDto = {
        email: 'test@example.com',
        password: 'password123',
        completeName: 'Test User',
        cpf: '12345678901',
        phone: '1234567890',
        role: Role.administrator,
      };

      mockPrismaService.user.create.mockResolvedValue(mockUser);
      mockedBcrypt.hash.mockResolvedValue('$2b$10$hashedpassword' as never);

      const result = await service.create(createUserDto);

      expect(result).not.toHaveProperty('hashedPassword');
      expect(result.email).toBe(createUserDto.email);
      expect(prismaService.user.create).toHaveBeenCalled();
    });
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const users = [
        {
          id: 1,
          role: Role.administrator,
          email: 'admin@example.com',
          completeName: 'Admin User',
          cpf: '12345678901',
          phone: '1234567890',
          createdAt: new Date(),
        },
        {
          id: 2,
          role: Role.veterinarian,
          email: 'vet@example.com',
          completeName: 'Vet User',
          cpf: '98765432100',
          phone: '0987654321',
          createdAt: new Date(),
        },
      ];

      mockPrismaService.user.findMany.mockResolvedValue(users);

      const result = await service.findAll();

      expect(result).toEqual(users);
      expect(prismaService.user.findMany).toHaveBeenCalled();
    });
  });

  describe('findById', () => {
    it('should return a user by id', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue(mockUser);

      const result = await service.findById(1);

      expect(result).not.toHaveProperty('hashedPassword');
      expect(result.id).toBe(1);
      expect(prismaService.user.findUnique).toHaveBeenCalledWith({ where: { id: 1 } });
    });

    it('should throw NotFoundException when user not found', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue(null);

      await expect(service.findById(999)).rejects.toThrow(NotFoundException);
    });
  });

  describe('findByEmail', () => {
    it('should return a user by email', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue(mockUser);

      const result = await service.findByEmail('test@example.com');

      expect(result).toEqual(mockUser);
      expect(prismaService.user.findUnique).toHaveBeenCalledWith({
        where: { email: 'test@example.com' },
      });
    });

    it('should return null when user not found', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue(null);

      const result = await service.findByEmail('nonexistent@example.com');

      expect(result).toBeNull();
    });
  });

  describe('findByCpf', () => {
    it('should return a user by CPF', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue(mockUser);

      const result = await service.findByCpf('12345678901');

      expect(result).toEqual(mockUser);
      expect(prismaService.user.findUnique).toHaveBeenCalledWith({
        where: { cpf: '12345678901' },
      });
    });

    it('should return null when user not found', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue(null);

      const result = await service.findByCpf('00000000000');

      expect(result).toBeNull();
    });
  });

  describe('update', () => {
    it('should update a user successfully', async () => {
      const updateDto = {
        completeName: 'Updated Name',
        phone: '9999999999',
      };

      const updatedUser = { ...mockUser, ...updateDto };

      mockPrismaService.user.findUnique.mockResolvedValue(mockUser);
      mockPrismaService.user.update.mockResolvedValue(updatedUser);

      const result = await service.update(1, updateDto);

      expect(result.completeName).toBe('Updated Name');
      expect(result).not.toHaveProperty('hashedPassword');
      expect(prismaService.user.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: updateDto,
      });
    });
    
    it('should hash password when updating password', async () => {
      const updateDto = { password: 'newpassword123' };

      mockPrismaService.user.findUnique.mockResolvedValue(mockUser);
      mockPrismaService.user.update.mockResolvedValue(mockUser);
      mockedBcrypt.hash.mockResolvedValue('$2b$10$newhashed' as never);

      await service.update(1, updateDto);

      expect(bcrypt.hash).toHaveBeenCalledWith('newpassword123', 10);
    });

    it('should throw NotFoundException when user not found', async () => {
      mockPrismaService.user.findUnique.mockResolvedValue(null);

      await expect(service.update(999, { completeName: 'Test' })).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('remove', () => {
    it('should delete a user successfully', async () => {
      mockPrismaService.user.delete.mockResolvedValue(mockUser);

      const result = await service.remove(1);

      expect(result).toEqual({ message: 'User deleted successfully' });
      expect(prismaService.user.delete).toHaveBeenCalledWith({ where: { id: 1 } });
    });
  });
});
