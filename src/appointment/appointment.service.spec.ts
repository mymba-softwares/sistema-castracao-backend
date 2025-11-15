import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentService } from './appointment.service';
import { PrismaService } from '../prisma/prisma.service';
import { AnimalsService } from '../animals/animals.service';
import { PetOwnerService } from '../pet-owner/pet-owner.service';
import { ConflictException, NotFoundException } from '@nestjs/common';
import { AppointmentStatus, ServiceType, Species, Gender } from '@prisma/client';
import { CreateAppointmentDto } from './dto/create-appointment.dto';

describe('AppointmentService', () => {
  let service: AppointmentService;
  let prismaService: PrismaService;
  let animalsService: AnimalsService;
  let petOwnerService: PetOwnerService;

  const mockPrismaService = {
    appointment: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
      findFirst: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  };

  const mockAnimalsService = {
    findAnimalById: jest.fn(),
  };

  const mockPetOwnerService = {
    findPetOwnerById: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AppointmentService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
        {
          provide: AnimalsService,
          useValue: mockAnimalsService,
        },
        {
          provide: PetOwnerService,
          useValue: mockPetOwnerService,
        },
      ],
    }).compile();

    service = module.get<AppointmentService>(AppointmentService);
    prismaService = module.get<PrismaService>(PrismaService);
    animalsService = module.get<AnimalsService>(AnimalsService);
    petOwnerService = module.get<PetOwnerService>(PetOwnerService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of appointments', async () => {
      const mockAppointments = [
        {
          id: 1,
          animalId: 1,
          petOwnerId: 1,
          startTime: new Date('2024-01-01T10:00:00Z'),
          endTime: new Date('2024-01-01T11:00:00Z'),
          status: AppointmentStatus.scheduled,
          serviceType: ServiceType.triage,
          notes: 'Test appointment',
          animal: {
            id: 1,
            name: 'Rex',
            species: Species.canine,
            gender: Gender.male,
          },
          petOwner: {
            user: {
              completeName: 'John Doe',
              email: 'john@example.com',
              phone: '123456789',
            },
          },
        },
      ];

      mockPrismaService.appointment.findMany.mockResolvedValue(mockAppointments);

      const result = await service.findAll();

      expect(result).toEqual(mockAppointments);
      expect(mockPrismaService.appointment.findMany).toHaveBeenCalledTimes(1);
    });
  });

  describe('findById', () => {
    it('should return an appointment by id', async () => {
      const mockAppointment = {
        id: 1,
        animalId: 1,
        petOwnerId: 1,
        startTime: new Date('2024-01-01T10:00:00Z'),
        endTime: new Date('2024-01-01T11:00:00Z'),
        status: AppointmentStatus.scheduled,
        serviceType: ServiceType.triage,
        notes: 'Test appointment',
      };

      mockPrismaService.appointment.findUnique.mockResolvedValue(mockAppointment);

      const result = await service.findById(1);

      expect(result).toEqual(mockAppointment);
      expect(mockPrismaService.appointment.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
        include: expect.any(Object),
      });
    });

    it('should throw NotFoundException when appointment not found', async () => {
      mockPrismaService.appointment.findUnique.mockResolvedValue(null);

      await expect(service.findById(999)).rejects.toThrow(NotFoundException);
    });
  });

  describe('findByAnimalId', () => {
    it('should return appointments for a specific animal', async () => {
      const mockAnimal = { id: 1, petOwnerId: 1 };
      const mockAppointments = [
        {
          id: 1,
          animalId: 1,
          petOwnerId: 1,
          startTime: new Date('2024-01-01T10:00:00Z'),
          endTime: new Date('2024-01-01T11:00:00Z'),
          status: AppointmentStatus.scheduled,
        },
      ];

      mockAnimalsService.findAnimalById.mockResolvedValue(mockAnimal);
      mockPrismaService.appointment.findMany.mockResolvedValue(mockAppointments);

      const result = await service.findByAnimalId(1);

      expect(result).toEqual(mockAppointments);
      expect(mockAnimalsService.findAnimalById).toHaveBeenCalledWith(1);
    });

    it('should throw NotFoundException when animal not found', async () => {
      mockAnimalsService.findAnimalById.mockResolvedValue(null);

      await expect(service.findByAnimalId(999)).rejects.toThrow(NotFoundException);
    });
  });

  describe('findByPetOwnerId', () => {
    it('should return appointments for a specific pet owner', async () => {
      const mockPetOwner = { id: 1 };
      const mockAppointments = [
        {
          id: 1,
          animalId: 1,
          petOwnerId: 1,
          startTime: new Date('2024-01-01T10:00:00Z'),
          endTime: new Date('2024-01-01T11:00:00Z'),
          status: AppointmentStatus.scheduled,
        },
      ];

      mockPetOwnerService.findPetOwnerById.mockResolvedValue(mockPetOwner);
      mockPrismaService.appointment.findMany.mockResolvedValue(mockAppointments);

      const result = await service.findByPetOwnerId(1);

      expect(result).toEqual(mockAppointments);
      expect(mockPetOwnerService.findPetOwnerById).toHaveBeenCalledWith(1);
    });

    it('should throw NotFoundException when pet owner not found', async () => {
      mockPetOwnerService.findPetOwnerById.mockResolvedValue(null);

      await expect(service.findByPetOwnerId(999)).rejects.toThrow(NotFoundException);
    });
  });

  describe('findByStatus', () => {
    it('should return appointments by status', async () => {
      const mockAppointments = [
        {
          id: 1,
          animalId: 1,
          petOwnerId: 1,
          status: AppointmentStatus.scheduled,
        },
      ];

      mockPrismaService.appointment.findMany.mockResolvedValue(mockAppointments);

      const result = await service.findByStatus(AppointmentStatus.scheduled);

      expect(result).toEqual(mockAppointments);
      expect(mockPrismaService.appointment.findMany).toHaveBeenCalledWith({
        where: { status: AppointmentStatus.scheduled },
        include: expect.any(Object),
        orderBy: { startTime: 'asc' },
      });
    });
  });

  describe('create', () => {
    const createDto: CreateAppointmentDto = {
      animalId: 1,
      petOwnerId: 1,
      startTime: new Date('2024-01-01T10:00:00Z'),
      endTime: new Date('2024-01-01T11:00:00Z'),
      serviceType: ServiceType.triage,
      notes: 'Test appointment',
    };

    it('should create a new appointment', async () => {
      const mockAnimal = { id: 1, petOwnerId: 1 };
      const mockPetOwner = { id: 1 };
      const mockCreatedAppointment = {
        id: 1,
        ...createDto,
        status: AppointmentStatus.scheduled,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockAnimalsService.findAnimalById.mockResolvedValue(mockAnimal);
      mockPetOwnerService.findPetOwnerById.mockResolvedValue(mockPetOwner);
      mockPrismaService.appointment.findFirst.mockResolvedValue(null);
      mockPrismaService.appointment.create.mockResolvedValue(mockCreatedAppointment);

      const result = await service.create(createDto);

      expect(result).toEqual(mockCreatedAppointment);
      expect(mockPrismaService.appointment.create).toHaveBeenCalled();
    });

    it('should throw NotFoundException when animal not found', async () => {
      mockAnimalsService.findAnimalById.mockResolvedValue(null);

      await expect(service.create(createDto)).rejects.toThrow(NotFoundException);
    });

    it('should throw NotFoundException when pet owner not found', async () => {
      const mockAnimal = { id: 1, petOwnerId: 1 };
      mockAnimalsService.findAnimalById.mockResolvedValue(mockAnimal);
      mockPetOwnerService.findPetOwnerById.mockResolvedValue(null);

      await expect(service.create(createDto)).rejects.toThrow(NotFoundException);
    });

    it('should throw ConflictException when animal does not belong to pet owner', async () => {
      const mockAnimal = { id: 1, petOwnerId: 2 };
      const mockPetOwner = { id: 1 };

      mockAnimalsService.findAnimalById.mockResolvedValue(mockAnimal);
      mockPetOwnerService.findPetOwnerById.mockResolvedValue(mockPetOwner);

      await expect(service.create(createDto)).rejects.toThrow(ConflictException);
    });

    it('should throw ConflictException when start time is after end time', async () => {
      const invalidDto = {
        ...createDto,
        startTime: new Date('2024-01-01T12:00:00Z'),
        endTime: new Date('2024-01-01T10:00:00Z'),
      };

      const mockAnimal = { id: 1, petOwnerId: 1 };
      const mockPetOwner = { id: 1 };

      mockAnimalsService.findAnimalById.mockResolvedValue(mockAnimal);
      mockPetOwnerService.findPetOwnerById.mockResolvedValue(mockPetOwner);

      await expect(service.create(invalidDto)).rejects.toThrow(ConflictException);
    });

    it('should throw ConflictException when there is a time conflict', async () => {
      const mockAnimal = { id: 1, petOwnerId: 1 };
      const mockPetOwner = { id: 1 };
      const conflictingAppointment = {
        id: 2,
        animalId: 1,
        startTime: new Date('2024-01-01T09:30:00Z'),
        endTime: new Date('2024-01-01T10:30:00Z'),
      };

      mockAnimalsService.findAnimalById.mockResolvedValue(mockAnimal);
      mockPetOwnerService.findPetOwnerById.mockResolvedValue(mockPetOwner);
      mockPrismaService.appointment.findFirst.mockResolvedValue(conflictingAppointment);

      await expect(service.create(createDto)).rejects.toThrow(ConflictException);
    });
  });

  describe('update', () => {
    const updateDto = {
      startTime: new Date('2024-01-01T14:00:00Z'),
      endTime: new Date('2024-01-01T15:00:00Z'),
      status: AppointmentStatus.confirmed,
    };

    it('should update an appointment', async () => {
      const mockAppointment = {
        id: 1,
        animalId: 1,
        petOwnerId: 1,
        startTime: new Date('2024-01-01T10:00:00Z'),
        endTime: new Date('2024-01-01T11:00:00Z'),
        status: AppointmentStatus.scheduled,
      };

      mockPrismaService.appointment.findUnique.mockResolvedValue(mockAppointment);
      mockPrismaService.appointment.update.mockResolvedValue({
        ...mockAppointment,
        ...updateDto,
      });

      const result = await service.update(1, updateDto);

      expect(mockPrismaService.appointment.update).toHaveBeenCalled();
      expect(result).toBeDefined();
    });

    it('should throw NotFoundException when appointment not found', async () => {
      mockPrismaService.appointment.findUnique.mockResolvedValue(null);

      await expect(service.update(999, updateDto)).rejects.toThrow(NotFoundException);
    });

    it('should throw ConflictException when start time is after end time', async () => {
      const mockAppointment = {
        id: 1,
        animalId: 1,
        petOwnerId: 1,
        status: AppointmentStatus.scheduled,
      };

      const invalidDto = {
        startTime: new Date('2024-01-01T15:00:00Z'),
        endTime: new Date('2024-01-01T14:00:00Z'),
      };

      mockPrismaService.appointment.findUnique.mockResolvedValue(mockAppointment);

      await expect(service.update(1, invalidDto)).rejects.toThrow(ConflictException);
    });
  });

  describe('delete', () => {
    it('should delete an appointment', async () => {
      const mockAppointment = {
        id: 1,
        animalId: 1,
        petOwnerId: 1,
        status: AppointmentStatus.scheduled,
      };

      mockPrismaService.appointment.findUnique.mockResolvedValue(mockAppointment);
      mockPrismaService.appointment.delete.mockResolvedValue(mockAppointment);

      const result = await service.delete(1);

      expect(result).toEqual({ message: 'Appointment deleted successfully' });
      expect(mockPrismaService.appointment.delete).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });

    it('should throw NotFoundException when appointment not found', async () => {
      mockPrismaService.appointment.findUnique.mockResolvedValue(null);

      await expect(service.delete(999)).rejects.toThrow(NotFoundException);
    });
  });
});
