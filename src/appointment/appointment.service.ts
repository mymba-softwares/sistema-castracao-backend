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
        veterinarian: {
          select: {
            id: true,
            crmv: true,
            specialty: true,
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
        veterinarian: {
          select: {
            id: true,
            crmv: true,
            specialty: true,
            user: {
              select: {
                completeName: true,
                email: true,
                phone: true,
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
    const petOwner = await this.petOwnerService.findPetOwnerByPetOwnerId(petOwnerId);

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

    const petOwner = await this.petOwnerService.findPetOwnerByPetOwnerId(createAppointmentDto.petOwnerId);

    if (!petOwner) {
      throw new NotFoundException('Pet owner not found');
    }

    if (createAppointmentDto.veterinarianId) {
      const veterinarian = await this.prisma.veterinarian.findUnique({
        where: { id: createAppointmentDto.veterinarianId },
      });

      if (!veterinarian) {
        throw new NotFoundException(`Veterinarian with ID ${createAppointmentDto.veterinarianId} not found`);
      }
    }

    if (animal.petOwnerId !== createAppointmentDto.petOwnerId) {
      throw new ConflictException('Animal does not belong to this pet owner');
    }

    const startTime = new Date(createAppointmentDto.startTime);
    const endTime = new Date(createAppointmentDto.endTime);

    if (startTime >= endTime) {
      throw new ConflictException('Start time must be before end time');
    }

    const conflictingAnimalAppointment = await this.prisma.appointment.findFirst({
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

    if (conflictingAnimalAppointment) {
      throw new ConflictException('There is already an appointment for this animal at this time');
    }

    if (createAppointmentDto.veterinarianId) {
      const conflictingVetAppointment = await this.prisma.appointment.findFirst({
        where: {
          veterinarianId: createAppointmentDto.veterinarianId,
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
        include: {
          animal: {
            select: {
              name: true,
            },
          },
        },
      });

      if (conflictingVetAppointment) {
        throw new ConflictException(
          `This veterinarian already has an appointment scheduled at this time (with ${conflictingVetAppointment.animal.name})`
        );
      }
    }

    try {
      const appointment = await this.prisma.appointment.create({
        data: {
          animalId: createAppointmentDto.animalId,
          petOwnerId: createAppointmentDto.petOwnerId,
          veterinarianId: createAppointmentDto.veterinarianId,
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
          veterinarian: {
            select: {
              id: true,
              crmv: true,
              specialty: true,
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

    if (updateAppointmentDto.startTime || updateAppointmentDto.endTime) {
      const newStartTime = updateAppointmentDto.startTime 
        ? new Date(updateAppointmentDto.startTime) 
        : appointment.startTime;
      const newEndTime = updateAppointmentDto.endTime 
        ? new Date(updateAppointmentDto.endTime) 
        : appointment.endTime;

      if (newStartTime >= newEndTime) {
        throw new ConflictException('Start time must be before end time');
      }

      const conflictingAnimalAppointment = await this.prisma.appointment.findFirst({
        where: {
          id: { not: id },
          animalId: appointment.animalId,
          status: {
            notIn: [AppointmentStatus.canceled, AppointmentStatus.absent],
          },
          OR: [
            {
              AND: [
                { startTime: { lte: newStartTime } },
                { endTime: { gt: newStartTime } },
              ],
            },
            {
              AND: [
                { startTime: { lt: newEndTime } },
                { endTime: { gte: newEndTime } },
              ],
            },
            {
              AND: [
                { startTime: { gte: newStartTime } },
                { endTime: { lte: newEndTime } },
              ],
            },
          ],
        },
      });

      if (conflictingAnimalAppointment) {
        throw new ConflictException('There is already an appointment for this animal at this time');
      }

      const veterinarianId = updateAppointmentDto.veterinarianId ?? appointment.veterinarianId;
      if (veterinarianId) {
        const conflictingVetAppointment = await this.prisma.appointment.findFirst({
          where: {
            id: { not: id },
            veterinarianId: veterinarianId,
            status: {
              notIn: [AppointmentStatus.canceled, AppointmentStatus.absent],
            },
            OR: [
              {
                AND: [
                  { startTime: { lte: newStartTime } },
                  { endTime: { gt: newStartTime } },
                ],
              },
              {
                AND: [
                  { startTime: { lt: newEndTime } },
                  { endTime: { gte: newEndTime } },
                ],
              },
              {
                AND: [
                  { startTime: { gte: newStartTime } },
                  { endTime: { lte: newEndTime } },
                ],
              },
            ],
          },
          include: {
            animal: {
              select: {
                name: true,
              },
            },
          },
        });

        if (conflictingVetAppointment) {
          throw new ConflictException(
            `This veterinarian already has an appointment scheduled at this time (with ${conflictingVetAppointment.animal.name})`
          );
        }
      }
    }

    const {
      startTime,
      endTime,
      serviceType,
      status,
      notes,
      veterinarianId,
    } = updateAppointmentDto;

    const appointmentDataToUpdate: any = {};

    if (startTime) appointmentDataToUpdate.startTime = new Date(startTime);
    if (endTime) appointmentDataToUpdate.endTime = new Date(endTime);
    if (serviceType) appointmentDataToUpdate.serviceType = serviceType;
    if (status) appointmentDataToUpdate.status = status;
    if (notes !== undefined) appointmentDataToUpdate.notes = notes;
    if (veterinarianId !== undefined) appointmentDataToUpdate.veterinarianId = veterinarianId;

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