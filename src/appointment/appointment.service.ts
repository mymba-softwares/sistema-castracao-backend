import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AppointmentStatus } from '@prisma/client';
import { AnimalsService } from 'src/animals/animals.service';
import { PetOwnerService } from 'src/pet-owner/pet-owner.service';

@Injectable()
export class AppointmentService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly animalsService: AnimalsService,
    private readonly petOwnerService: PetOwnerService,
  ) {}

  async findAll() {
    return this.prisma.appointment.findMany({
      include: {
        animal: {
          select: {
            id: true,
            name: true,
            species: true,
            gender: true,
          },
        },
        petOwner: {
          include: {
            user: {
              select: {
                completeName: true,
                email: true,
                phone: true,
              },
            },
          },
        },
      },
      orderBy: {
        startTime: 'asc',
      },
    });
  }

  async findById(id: number) {
    const appointment = await this.prisma.appointment.findUnique({
      where: { id },
      include: {
        animal: {
          select: {
            id: true,
            name: true,
            species: true,
            gender: true,
            breed: true,
          },
        },
        petOwner: {
          include: {
            user: {
              select: {
                completeName: true,
                email: true,
                phone: true,
                cpf: true,
              },
            },
          },
        },
        clinicalRecords: {
          select: {
            id: true,
            type: true,
            treatmentDate: true,
          },
        },
      },
    });

    if (!appointment) {
      throw new NotFoundException('Appointment not found');
    }

    return appointment;
  }

  async findByAnimalId(animalId: number) {
    const animal = await this.animalsService.findAnimalById(animalId);

    if (!animal) {
      throw new NotFoundException('Animal not found');
    }

    return this.prisma.appointment.findMany({
      where: { animalId },
      include: {
        animal: {
          select: {
            id: true,
            name: true,
            species: true,
          },
        },
        petOwner: {
          include: {
            user: {
              select: {
                completeName: true,
                phone: true,
              },
            },
          },
        },
      },
      orderBy: {
        startTime: 'desc',
      },
    });
  }

  async findByPetOwnerId(petOwnerId: number) {
    const petOwner = await this.petOwnerService.findPetOwnerById(petOwnerId);

    if (!petOwner) {
      throw new NotFoundException('Pet owner not found');
    }

    return this.prisma.appointment.findMany({
      where: { petOwnerId },
      include: {
        animal: {
          select: {
            id: true,
            name: true,
            species: true,
            gender: true,
          },
        },
      },
      orderBy: {
        startTime: 'desc',
      },
    });
  }

  async findByStatus(status: AppointmentStatus) {
    return this.prisma.appointment.findMany({
      where: { status },
      include: {
        animal: {
          select: {
            id: true,
            name: true,
            species: true,
          },
        },
        petOwner: {
          include: {
            user: {
              select: {
                completeName: true,
                phone: true,
              },
            },
          },
        },
      },
      orderBy: {
        startTime: 'asc',
      },
    });
  }

  async create(createAppointmentDto: CreateAppointmentDto) {
    const animal = await this.animalsService.findAnimalById(createAppointmentDto.animalId);

    if (!animal) {
      throw new NotFoundException('Animal not found');
    }

    const petOwner = await this.petOwnerService.findPetOwnerById(createAppointmentDto.petOwnerId);

    if (!petOwner) {
      throw new NotFoundException('Pet owner not found');
    }

    // Validar se o animal pertence ao pet owner
    if (animal.petOwnerId !== createAppointmentDto.petOwnerId) {
      throw new ConflictException('Animal does not belong to this pet owner');
    }

    const startTime = new Date(createAppointmentDto.startTime);
    const endTime = new Date(createAppointmentDto.endTime);

    if (startTime >= endTime) {
      throw new ConflictException('Start time must be before end time');
    }

    const conflictingAppointment = await this.prisma.appointment.findFirst({
      where: {
        animalId: createAppointmentDto.animalId,
        status: {
          notIn: [AppointmentStatus.canceled, AppointmentStatus.absent],
        },
        OR: [
          {
            AND: [
              { startTime: { lte: startTime } },
              { endTime: { gt: startTime } },
            ],
          },
          {
            AND: [
              { startTime: { lt: endTime } },
              { endTime: { gte: endTime } },
            ],
          },
          {
            AND: [
              { startTime: { gte: startTime } },
              { endTime: { lte: endTime } },
            ],
          },
        ],
      },
    });

    if (conflictingAppointment) {
      throw new ConflictException('There is already an appointment for this animal at this time');
    }

    try {
      const appointment = await this.prisma.appointment.create({
        data: {
          animalId: createAppointmentDto.animalId,
          petOwnerId: createAppointmentDto.petOwnerId,
          startTime: startTime,
          endTime: endTime,
          serviceType: createAppointmentDto.serviceType,
          status: createAppointmentDto.status || AppointmentStatus.scheduled,
          notes: createAppointmentDto.notes,
        },
        include: {
          animal: {
            select: {
              id: true,
              name: true,
              species: true,
              gender: true,
            },
          },
          petOwner: {
            include: {
              user: {
                select: {
                  completeName: true,
                  email: true,
                  phone: true,
                },
              },
            },
          },
        },
      });

      return appointment;
    } catch (error) {
      throw new ConflictException(`Error creating appointment: ${error.message}`);
    }
  }

  async update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    const appointment = await this.findById(id);

    if (!appointment) {
      throw new NotFoundException('Appointment not found');
    }

    // Validar startTime e endTime se ambos forem fornecidos
    if (updateAppointmentDto.startTime && updateAppointmentDto.endTime) {
      const startTime = new Date(updateAppointmentDto.startTime);
      const endTime = new Date(updateAppointmentDto.endTime);

      if (startTime >= endTime) {
        throw new ConflictException('Start time must be before end time');
      }
    }

    const {
      startTime,
      endTime,
      serviceType,
      status,
      notes,
    } = updateAppointmentDto;

    const appointmentDataToUpdate: any = {};

    if (startTime) appointmentDataToUpdate.startTime = new Date(startTime);
    if (endTime) appointmentDataToUpdate.endTime = new Date(endTime);
    if (serviceType) appointmentDataToUpdate.serviceType = serviceType;
    if (status) appointmentDataToUpdate.status = status;
    if (notes !== undefined) appointmentDataToUpdate.notes = notes;

    try {
      await this.prisma.appointment.update({
        where: { id },
        data: appointmentDataToUpdate,
      });

      return this.findById(id);
    } catch (error) {
      throw new ConflictException(`Error updating appointment: ${error.message}`);
    }
  }

  async delete(id: number) {
    const appointment = await this.findById(id);

    if (!appointment) {
      throw new NotFoundException('Appointment not found');
    }

    try {
      await this.prisma.appointment.delete({
        where: { id },
      });

      return { message: 'Appointment deleted successfully' };
    } catch (error) {
      throw new ConflictException(`Error deleting appointment: ${error.message}`);
    }
  }
}