import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAnestheticRecordDto } from './dto/create-anesthetic-record.dto';
import { UpdateAnestheticRecordDto } from './dto/update-anesthetic-record.dto';

@Injectable()
export class AnestheticRecordService {
  constructor(private prisma: PrismaService) {}

  async create(createAnestheticRecordDto: CreateAnestheticRecordDto) {
    const medicalRecord = await this.prisma.medicalRecord.findUnique({
      where: { id: createAnestheticRecordDto.medicalRecordId },
    });

    if (!medicalRecord) {
      throw new NotFoundException(
        `Medical record with ID ${createAnestheticRecordDto.medicalRecordId} not found. Please create a medical record first.`
      );
    }

    if (createAnestheticRecordDto.appointmentId) {
      const appointment = await this.prisma.appointment.findUnique({
        where: { id: createAnestheticRecordDto.appointmentId },
      });

      if (!appointment) {
        throw new NotFoundException(
          `Appointment with ID ${createAnestheticRecordDto.appointmentId} not found.`
        );
      }
    }

    if (createAnestheticRecordDto.anesthetistId) {
      const anesthetist = await this.prisma.veterinarian.findUnique({
        where: { id: createAnestheticRecordDto.anesthetistId },
      });

      if (!anesthetist) {
        throw new NotFoundException(
          `Anesthetist with ID ${createAnestheticRecordDto.anesthetistId} not found.`
        );
      }
    }

    if (createAnestheticRecordDto.surgeonId) {
      const surgeon = await this.prisma.veterinarian.findUnique({
        where: { id: createAnestheticRecordDto.surgeonId },
      });

      if (!surgeon) {
        throw new NotFoundException(
          `Surgeon with ID ${createAnestheticRecordDto.surgeonId} not found.`
        );
      }
    }

    const { medications, monitoring, ...recordData } = createAnestheticRecordDto;

    return this.prisma.anestheticRecord.create({
      data: {
        ...recordData,
        medications: medications ? {
          create: medications,
        } : undefined,
        monitoring: monitoring ? {
          create: monitoring,
        } : undefined,
      },
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
        anesthetist: {
          include: {
            user: true,
          },
        },
        surgeon: {
          include: {
            user: true,
          },
        },
        medications: true,
        monitoring: true,
      },
    });
  }

  async findAll() {
    return this.prisma.anestheticRecord.findMany({
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
        anesthetist: {
          include: {
            user: true,
          },
        },
        surgeon: {
          include: {
            user: true,
          },
        },
        medications: true,
        monitoring: {
          orderBy: {
            measurementTime: 'asc',
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: number) {
    const anestheticRecord = await this.prisma.anestheticRecord.findUnique({
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
        anesthetist: {
          include: {
            user: true,
          },
        },
        surgeon: {
          include: {
            user: true,
          },
        },
        medications: true,
        monitoring: {
          orderBy: {
            measurementTime: 'asc',
          },
        },
      },
    });

    if (!anestheticRecord) {
      throw new NotFoundException(`Anesthetic record with ID ${id} not found`);
    }

    return anestheticRecord;
  }

  async findByMedicalRecord(medicalRecordId: number) {
    return this.prisma.anestheticRecord.findMany({
      where: { medicalRecordId },
      include: {
        medicalRecord: {
          include: {
            animal: true,
          },
        },
        appointment: true,
        anesthetist: {
          include: {
            user: true,
          },
        },
        surgeon: {
          include: {
            user: true,
          },
        },
        medications: true,
        monitoring: {
          orderBy: {
            measurementTime: 'asc',
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async update(id: number, updateAnestheticRecordDto: UpdateAnestheticRecordDto) {
    const anestheticRecord = await this.prisma.anestheticRecord.findUnique({
      where: { id },
    });

    if (!anestheticRecord) {
      throw new NotFoundException(`Anesthetic record with ID ${id} not found`);
    }

    const { medications, monitoring, ...recordData } = updateAnestheticRecordDto;

    if (medications !== undefined) {
      await this.prisma.anestheticMedication.deleteMany({
        where: { anestheticRecordId: id },
      });
    }

    if (monitoring !== undefined) {
      await this.prisma.anestheticMonitoring.deleteMany({
        where: { anestheticRecordId: id },
      });
    }

    return this.prisma.anestheticRecord.update({
      where: { id },
      data: {
        ...recordData,
        medications: medications ? {
          create: medications,
        } : undefined,
        monitoring: monitoring ? {
          create: monitoring,
        } : undefined,
      },
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
        anesthetist: {
          include: {
            user: true,
          },
        },
        surgeon: {
          include: {
            user: true,
          },
        },
        medications: true,
        monitoring: {
          orderBy: {
            measurementTime: 'asc',
          },
        },
      },
    });
  }

  async remove(id: number) {
    const anestheticRecord = await this.prisma.anestheticRecord.findUnique({
      where: { id },
    });

    if (!anestheticRecord) {
      throw new NotFoundException(`Anesthetic record with ID ${id} not found`);
    }

    return this.prisma.anestheticRecord.delete({
      where: { id },
    });
  }
}
