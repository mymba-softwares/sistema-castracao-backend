import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClinicalRecordDto } from './dto/create-clinical-record.dto';
import { UpdateClinicalRecordDto } from './dto/update-clinical-record.dto';
import { ClinicalRecordType } from '@prisma/client';

@Injectable()
export class ClinicalRecordService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.clinicalRecord.findMany({
      include: {
        medicalRecord: {
          include: {
            animal: true,
          },
        },
        appointment: true,
        veterinarian: {
          include: {
            user: true,
          },
        },
      },
    });
  }

  async findOne(id: number) {
    const clinicalRecord = await this.prisma.clinicalRecord.findUnique({
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
        veterinarian: {
          include: {
            user: true,
          },
        },
      },
    });

    if (!clinicalRecord) {
      throw new NotFoundException('Clinical record not found');
    }

    return clinicalRecord;
  }

  async findByMedicalRecord(medicalRecordId: number) {
    return this.prisma.clinicalRecord.findMany({
      where: { medicalRecordId },
      include: {
        appointment: true,
        veterinarian: {
          include: {
            user: true,
          },
        },
      },
      orderBy: {
        treatmentDate: 'desc',
      },
    });
  }

  async findByAnimal(animalId: number) {
    const medicalRecord = await this.prisma.medicalRecord.findUnique({
      where: { animalId },
    });

    if (!medicalRecord) {
      throw new NotFoundException('Medical record not found for this animal');
    }

    return this.findByMedicalRecord(medicalRecord.id);
  }

  async create(dto: CreateClinicalRecordDto) {
    const medicalRecord = await this.prisma.medicalRecord.findUnique({
      where: { id: dto.medicalRecordId },
    });

    if (!medicalRecord) {
      throw new NotFoundException('Medical record not found');
    }

    const veterinarian = await this.prisma.veterinarian.findUnique({
      where: { id: dto.veterinarianId },
    });

    if (!veterinarian) {
      throw new NotFoundException('Veterinarian not found');
    }

    if (dto.appointmentId) {
      const appointment = await this.prisma.appointment.findUnique({
        where: { id: dto.appointmentId },
      });

      if (!appointment) {
        throw new NotFoundException('Appointment not found');
      }
    }

    if (dto.type === ClinicalRecordType.triage && dto.fitForSurgery === undefined) {
      throw new BadRequestException('fitForSurgery is required for triage records');
    }

    if (dto.type === ClinicalRecordType.surgery && !dto.surgeryType) {
      throw new BadRequestException('surgeryType is required for surgery records');
    }

    return this.prisma.clinicalRecord.create({
      data: dto,
      include: {
        medicalRecord: {
          include: {
            animal: true,
          },
        },
        appointment: true,
        veterinarian: {
          include: {
            user: true,
          },
        },
      },
    });
  }

  async update(id: number, dto: UpdateClinicalRecordDto) {
    const clinicalRecord = await this.prisma.clinicalRecord.findUnique({
      where: { id },
    });

    if (!clinicalRecord) {
      throw new NotFoundException('Clinical record not found');
    }

    const type = dto.type || clinicalRecord.type;
    
    if (type === ClinicalRecordType.triage && dto.fitForSurgery === undefined && clinicalRecord.fitForSurgery === null) {
      throw new BadRequestException('fitForSurgery is required for triage records');
    }

    if (type === ClinicalRecordType.surgery && !dto.surgeryType && !clinicalRecord.surgeryType) {
      throw new BadRequestException('surgeryType is required for surgery records');
    }

    const dataToUpdate: any = {};
    
    if (dto.medicalRecordId !== undefined) dataToUpdate.medicalRecordId = dto.medicalRecordId;
    if (dto.appointmentId !== undefined) dataToUpdate.appointmentId = dto.appointmentId;
    if (dto.veterinarianId !== undefined) dataToUpdate.veterinarianId = dto.veterinarianId;
    if (dto.type !== undefined) dataToUpdate.type = dto.type;
    if (dto.treatmentDate !== undefined) dataToUpdate.treatmentDate = new Date(dto.treatmentDate);
    if (dto.fitForSurgery !== undefined) dataToUpdate.fitForSurgery = dto.fitForSurgery;
    if (dto.surgeryType !== undefined) dataToUpdate.surgeryType = dto.surgeryType;
    if (dto.observations !== undefined) dataToUpdate.observations = dto.observations;
    if (dto.instructions !== undefined) dataToUpdate.instructions = dto.instructions;

    return this.prisma.clinicalRecord.update({
      where: { id },
      data: dataToUpdate,
      include: {
        medicalRecord: {
          include: {
            animal: true,
          },
        },
        appointment: true,
        veterinarian: {
          include: {
            user: true,
          },
        },
      },
    });
  }

  async remove(id: number) {
    const clinicalRecord = await this.prisma.clinicalRecord.findUnique({
      where: { id },
    });

    if (!clinicalRecord) {
      throw new NotFoundException('Clinical record not found');
    }

    return this.prisma.clinicalRecord.delete({
      where: { id },
    });
  }
}
