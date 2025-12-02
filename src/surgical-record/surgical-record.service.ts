import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSurgicalRecordDto } from './dto/create-surgical-record.dto';
import { UpdateSurgicalRecordDto } from './dto/update-surgical-record.dto';

@Injectable()
export class SurgicalRecordService {
  constructor(private prisma: PrismaService) {}

  async create(createSurgicalRecordDto: CreateSurgicalRecordDto) {
    const medicalRecord = await this.prisma.medicalRecord.findUnique({
      where: { id: createSurgicalRecordDto.medicalRecordId },
    });

    if (!medicalRecord) {
      throw new NotFoundException(
        `Medical record with ID ${createSurgicalRecordDto.medicalRecordId} not found. Please create a medical record first.`
      );
    }

    if (createSurgicalRecordDto.appointmentId) {
      const appointment = await this.prisma.appointment.findUnique({
        where: { id: createSurgicalRecordDto.appointmentId },
      });

      if (!appointment) {
        throw new NotFoundException(
          `Appointment with ID ${createSurgicalRecordDto.appointmentId} not found.`
        );
      }
    }

    return this.prisma.surgicalRecord.create({
      data: createSurgicalRecordDto,
      include: {
        medicalRecord: {
          include: {
            animal: {
              include: {
                petOwner: {
                  include: {
                    user: true,
                  },
                },
              },
            },
          },
        },
        appointment: true,
      },
    });
  }

  async findAll() {
    return this.prisma.surgicalRecord.findMany({
      include: {
        medicalRecord: {
          include: {
            animal: {
              include: {
                petOwner: {
                  include: {
                    user: true,
                  },
                },
              },
            },
          },
        },
        appointment: true,
      },
      orderBy: {
        recordDate: 'desc',
      },
    });
  }

  async findOne(id: number) {
    const surgicalRecord = await this.prisma.surgicalRecord.findUnique({
      where: { id },
      include: {
        medicalRecord: {
          include: {
            animal: {
              include: {
                petOwner: {
                  include: {
                    user: true,
                  },
                },
              },
            },
          },
        },
        appointment: true,
      },
    });

    if (!surgicalRecord) {
      throw new NotFoundException(`Surgical record with ID ${id} not found`);
    }

    return surgicalRecord;
  }

  async findByMedicalRecord(medicalRecordId: number) {
    return this.prisma.surgicalRecord.findMany({
      where: { medicalRecordId },
      include: {
        medicalRecord: {
          include: {
            animal: true,
          },
        },
        appointment: true,
      },
      orderBy: {
        recordDate: 'desc',
      },
    });
  }

  async update(id: number, updateSurgicalRecordDto: UpdateSurgicalRecordDto) {
    const surgicalRecord = await this.prisma.surgicalRecord.findUnique({
      where: { id },
    });

    if (!surgicalRecord) {
      throw new NotFoundException(`Surgical record with ID ${id} not found`);
    }

    return this.prisma.surgicalRecord.update({
      where: { id },
      data: updateSurgicalRecordDto,
      include: {
        medicalRecord: {
          include: {
            animal: {
              include: {
                petOwner: {
                  include: {
                    user: true,
                  },
                },
              },
            },
          },
        },
        appointment: true,
      },
    });
  }

  async remove(id: number) {
    const surgicalRecord = await this.prisma.surgicalRecord.findUnique({
      where: { id },
    });

    if (!surgicalRecord) {
      throw new NotFoundException(`Surgical record with ID ${id} not found`);
    }

    return this.prisma.surgicalRecord.delete({
      where: { id },
    });
  }
}
