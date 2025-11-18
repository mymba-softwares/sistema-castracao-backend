import { Injectable, NotFoundException, ConflictException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMedicalRecordDto } from './dto/create-medical-record.dto';
import { UpdateMedicalRecordDto } from './dto/update-medical-record.dto';

@Injectable()
export class MedicalRecordService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.medicalRecord.findMany({
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
        clinicalRecords: {
          orderBy: {
            treatmentDate: 'desc',
          },
        },
      },
    });
  }

  async findOne(id: number) {
    const medicalRecord = await this.prisma.medicalRecord.findUnique({
      where: { id },
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
        clinicalRecords: {
          include: {
            veterinarian: {
              include: {
                user: true,
              },
            },
            appointment: true,
          },
          orderBy: {
            treatmentDate: 'desc',
          },
        },
      },
    });

    if (!medicalRecord) {
      throw new NotFoundException('Medical record not found');
    }

    return medicalRecord;
  }

  async findByAnimal(animalId: number) {
    const medicalRecord = await this.prisma.medicalRecord.findUnique({
      where: { animalId },
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
        clinicalRecords: {
          include: {
            veterinarian: {
              include: {
                user: true,
              },
            },
            appointment: true,
          },
          orderBy: {
            treatmentDate: 'desc',
          },
        },
      },
    });

    if (!medicalRecord) {
      throw new NotFoundException('Medical record not found for this animal');
    }

    return medicalRecord;
  }

  async create(dto: CreateMedicalRecordDto) {
    const animal = await this.prisma.animal.findUnique({
      where: { id: dto.animalId },
    });

    if (!animal) {
      throw new NotFoundException('Animal not found');
    }

    const existingRecord = await this.prisma.medicalRecord.findUnique({
      where: { animalId: dto.animalId },
    });

    if (existingRecord) {
      throw new ConflictException('Medical record already exists for this animal');
    }

    if (dto.microchipNumber) {
      const microchipExists = await this.prisma.medicalRecord.findUnique({
        where: { microchipNumber: dto.microchipNumber },
      });

      if (microchipExists) {
        throw new ConflictException('Microchip number already registered');
      }

      const animalMicrochip = await this.prisma.animal.findUnique({
        where: { microchipNumber: dto.microchipNumber },
      });

      if (animalMicrochip) {
        throw new ConflictException('Microchip number already registered in animals');
      }
    }

    return this.prisma.medicalRecord.create({
      data: {
        animalId: dto.animalId,
        microchipNumber: dto.microchipNumber,
      },
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
        clinicalRecords: true,
      },
    });
  }

  async update(id: number, dto: UpdateMedicalRecordDto) {
    const medicalRecord = await this.prisma.medicalRecord.findUnique({
      where: { id },
    });

    if (!medicalRecord) {
      throw new NotFoundException('Medical record not found');
    }

    if (dto.microchipNumber && dto.microchipNumber !== medicalRecord.microchipNumber) {
      const microchipExists = await this.prisma.medicalRecord.findUnique({
        where: { microchipNumber: dto.microchipNumber },
      });

      if (microchipExists) {
        throw new ConflictException('Microchip number already registered');
      }

      const animalMicrochip = await this.prisma.animal.findUnique({
        where: { microchipNumber: dto.microchipNumber },
      });

      if (animalMicrochip) {
        throw new ConflictException('Microchip number already registered in animals');
      }
    }

    const dataToUpdate: any = {};
    
    if (dto.animalId !== undefined) {
      const animal = await this.prisma.animal.findUnique({
        where: { id: dto.animalId },
      });

      if (!animal) {
        throw new NotFoundException('Animal not found');
      }

      if (dto.animalId !== medicalRecord.animalId) {
        const existingRecord = await this.prisma.medicalRecord.findUnique({
          where: { animalId: dto.animalId },
        });

        if (existingRecord) {
          throw new ConflictException('Medical record already exists for this animal');
        }
      }

      dataToUpdate.animalId = dto.animalId;
    }
    
    if (dto.microchipNumber !== undefined) {
      dataToUpdate.microchipNumber = dto.microchipNumber;
    }

    return this.prisma.medicalRecord.update({
      where: { id },
      data: dataToUpdate,
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
        clinicalRecords: {
          orderBy: {
            treatmentDate: 'desc',
          },
        },
      },
    });
  }

  async remove(id: number) {
    const medicalRecord = await this.prisma.medicalRecord.findUnique({
      where: { id },
      include: {
        clinicalRecords: true,
      },
    });

    if (!medicalRecord) {
      throw new NotFoundException('Medical record not found');
    }

    if (medicalRecord.clinicalRecords.length > 0) {
      throw new BadRequestException('Cannot delete medical record with existing clinical records');
    }

    return this.prisma.medicalRecord.delete({
      where: { id },
    });
  }
}
