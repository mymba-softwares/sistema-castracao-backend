import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { TokenService } from '../token/token.service';
import { VeterinarianService } from '../veterinarian/veterinarian.service';
import { PetOwnerService } from '../pet-owner/pet-owner.service';
import { PrismaService } from '../prisma/prisma.service';
import { UnauthorizedException, BadRequestException, ConflictException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Role } from '@prisma/client';
import { generateValidCPF } from 'src/utils/cpf-generator';

jest.mock('bcrypt');
const mockedBcrypt = bcrypt as jest.Mocked<typeof bcrypt>;

describe('AuthService', () => {
  let service: AuthService;
  let userService: UserService;
  let tokenService: TokenService;
  let veterinarianService: VeterinarianService;
  let petOwnerService: PetOwnerService;
  let prismaService: PrismaService;

  const mockUser = {
    id: 1,
    email: 'test@example.com',
    hashedPassword: '$2b$10$hashedpassword',
    completeName: 'Test User',
    cpf: generateValidCPF(),
    phone: '1234567890',
    role: Role.administrator,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mockUserService = {
    findByEmail: jest.fn(),
    findByCpf: jest.fn(),
    create: jest.fn(),
  };

  const mockTokenService = {
    createTokens: jest.fn(),
  };

  const mockVeterinarianService = {
    createVeterinarian: jest.fn(),
  };

  const mockPetOwnerService = {
    createPetOwner: jest.fn(),
  };

  const mockPrismaService = {
    user: {
      create: jest.fn(),
    },
    veterinarian: {
      create: jest.fn(),
    },
    petOwner: {
      create: jest.fn(),
    },
    $transaction: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UserService, useValue: mockUserService },
        { provide: TokenService, useValue: mockTokenService },
        { provide: VeterinarianService, useValue: mockVeterinarianService },
        { provide: PetOwnerService, useValue: mockPetOwnerService },
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
    userService = module.get<UserService>(UserService);
    tokenService = module.get<TokenService>(TokenService);
    veterinarianService = module.get<VeterinarianService>(VeterinarianService);
    petOwnerService = module.get<PetOwnerService>(PetOwnerService);
    prismaService = module.get<PrismaService>(PrismaService);

    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('login', () => {
    it('should return tokens when credentials are valid', async () => {
      const loginDto = { email: 'test@example.com', password: 'password123' };
      const mockTokens = {
        accessToken: 'mock-access-token',
        refreshToken: 'mock-refresh-token',
      };

      mockUserService.findByEmail.mockResolvedValue(mockUser);
      mockedBcrypt.compare.mockResolvedValue(true as never);
      mockTokenService.createTokens.mockResolvedValue(mockTokens);

      const result = await service.login(loginDto);

      expect(result).toEqual(mockTokens);
      expect(userService.findByEmail).toHaveBeenCalledWith(loginDto.email);
      expect(tokenService.createTokens).toHaveBeenCalledWith(
        mockUser.id,
        mockUser.email,
        mockUser.role,
      );
    });

    it('should throw UnauthorizedException when user not found', async () => {
      const loginDto = { email: 'nonexistent@example.com', password: 'password123' };
      mockUserService.findByEmail.mockResolvedValue(null);

      await expect(service.login(loginDto)).rejects.toThrow(UnauthorizedException);
      expect(userService.findByEmail).toHaveBeenCalledWith(loginDto.email);
    });

    it('should throw UnauthorizedException when password is incorrect', async () => {
      const loginDto = { email: 'test@example.com', password: 'wrongpassword' };
      mockUserService.findByEmail.mockResolvedValue(mockUser);
      mockedBcrypt.compare.mockResolvedValue(false as never);

      await expect(service.login(loginDto)).rejects.toThrow(UnauthorizedException);
    });
  });

  describe('validateRegisterData', () => {
    it('should validate correct data', async () => {
      const dto = {
        email: 'test@example.com',
        password: 'password123',
        cpf: generateValidCPF(),
        completeName: 'Test User',
        phone: '1234567890',
        role: Role.administrator,
      };

      mockUserService.findByEmail.mockResolvedValue(null);
      mockUserService.findByCpf.mockResolvedValue(null);

      await expect(service.validateRegisterData(dto)).resolves.toBe(true);
    });

    it('should throw BadRequestException when password is too short', async () => {
      const dto = {
        email: 'test@example.com',
        password: '123',
        cpf: generateValidCPF(),
        completeName: 'Test User',
        phone: '1234567890',
        role: Role.administrator,
      };

      await expect(service.validateRegisterData(dto)).rejects.toThrow(BadRequestException);
    });

    it('should throw BadRequestException when role is invalid', async () => {
      const dto = {
        email: 'test@example.com',
        password: 'password123',
        cpf: generateValidCPF(),
        completeName: 'Test User',
        phone: '1234567890',
        role: 'invalid_role' as Role,
      };

      await expect(service.validateRegisterData(dto)).rejects.toThrow(BadRequestException);
    });

    it('should throw ConflictException when email already exists', async () => {
      const dto = {
        email: 'test@example.com',
        password: 'password123',
        cpf: generateValidCPF(),
        completeName: 'Test User',
        phone: '1234567890',
        role: Role.administrator,
      };

      mockUserService.findByEmail.mockResolvedValue(mockUser);

      await expect(service.validateRegisterData(dto)).rejects.toThrow(ConflictException);
    });

    it('should throw ConflictException when CPF already exists', async () => {
      const dto = {
        email: 'test@example.com',
        password: 'password123',
        cpf: generateValidCPF(),
        completeName: 'Test User',
        phone: '1234567890',
        role: Role.administrator,
      };

      mockUserService.findByEmail.mockResolvedValue(null);
      mockUserService.findByCpf.mockResolvedValue(mockUser);

      await expect(service.validateRegisterData(dto)).rejects.toThrow(ConflictException);
    });
  });
});
