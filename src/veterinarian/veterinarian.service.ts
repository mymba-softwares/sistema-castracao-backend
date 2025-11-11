import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVeterinarianDto } from '../dto/create-veterinarian.dto';
import { UpdateVeterinarianDto } from '../dto/update-veterinarian.dto';
import * as bcrypt from 'bcrypt';
import { Role } from '@prisma/client';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Injectable()
export class VeterinarianService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllVeterinarians() {
    return this.prisma.veterinarian.findMany({
      include: {
        user: {
          select: {
            completeName: true,
            email: true,
            phone: true,
          },
        },
        _count: {
          select: { clinicalRecords: true },
        },
      },
    });
  }

  async findVeterinarianById(userId: number) {
    const vet = await this.prisma.veterinarian.findUnique({
      where: { userId },
      include: {
        user: {
          select: {
            completeName: true,
            email: true,
            cpf: true,
            phone: true,
          },
        },
        _count: {
          select: { clinicalRecords: true },
        },
      },
    });

    if (!vet) throw new NotFoundException('Veterinarian not found');
    return vet;
  }

  async findVeterinarianByEmail(email: string) {
    const vet = await this.prisma.veterinarian.findFirst({
      where: { user: { email } },
    });

    if (!vet) throw new NotFoundException('Veterinarian not found');
    return vet;
  }

async createVeterinarian(userId: number, dto: CreateVeterinarianDto) {
  try {
    const vet = await this.prisma.veterinarian.create({
      data: {
        userId,
        crmv: dto.crmv,
        active: dto.active ?? true,
      },
      include: {
        user: {
          select: {
            id: true,
            completeName: true,
            email: true,
            cpf: true,
            phone: true,
            role: true,
          },
        },
      },
    });

    return vet;
  } catch (error) {
    throw new ConflictException(`Error creating veterinarian: ${error.message}`);
  }
}

  // async updateVeterinarian(userId: number, dto: UpdateVeterinarianDto) {
  //   const existingVet = await this.findVeterinarianById(userId);
  //   if (!existingVet) {
  //     throw new NotFoundException(`Veterinarian with ID ${userId} not found`);
  //   }

  //   if (dto.email || dto.cpf) {
  //     const conflictingUser = await this.prisma.user.findFirst({
  //       where: {
  //         OR: [{ email: dto.email }, { cpf: dto.cpf }],
  //         id: { not: userId },
  //       },
  //     });
  //     if (conflictingUser) {
  //       throw new ConflictException('Email or CPF already in use by another user.');
  //     }
  //   }

  //   const { crmv, active, email, password, phone, completeName, cpf } = dto;

  //   const userDataToUpdate: any = {};
  //   if (email) userDataToUpdate.email = email;
  //   if (phone) userDataToUpdate.phone = phone;
  //   if (completeName) userDataToUpdate.completeName = completeName;
  //   if (cpf) userDataToUpdate.cpf = cpf;
  //   if (password) userDataToUpdate.hashedPassword = await bcrypt.hash(password, 10);

  //   const veterinarianDataToUpdate: any = {};
  //   if (crmv) veterinarianDataToUpdate.crmv = crmv;
  //   if (typeof active === 'boolean') veterinarianDataToUpdate.active = active;

  //   try {
  //     await this.prisma.$transaction(async (tx) => {
  //       if (Object.keys(userDataToUpdate).length > 0) {
  //         await tx.user.update({
  //           where: { id: userId },
  //           data: userDataToUpdate,
  //         });
  //       }
  //       if (Object.keys(veterinarianDataToUpdate).length > 0) {
  //         await tx.veterinarian.update({
  //           where: { userId },
  //           data: veterinarianDataToUpdate,
  //         });
  //       }
  //     });
  //   } catch (error) {
  //     throw new ConflictException(`Error updating veterinarian: ${error.message}`);
  //   }

  //   return this.findVeterinarianById(userId);
  // }

  async deleteVeterinarian(userId: number) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new NotFoundException('User not found');

    try {
      await this.prisma.user.delete({ where: { id: userId } });
      return { message: 'Veterinarian and related data deleted successfully.' };
    } catch (error) {
      throw new ConflictException(`Error deleting veterinarian: ${error.message}`);
    }
  }
}
