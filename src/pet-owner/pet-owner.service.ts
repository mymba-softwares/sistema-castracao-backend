import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePetOwnerDto } from './dto/create-pet-owner.dto';
import { UpdatePetOwnerDto } from './dto/update-pet-owner.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { Role } from '@prisma/client';

@Injectable()
export class PetOwnerService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllPetOwners() {
    return this.prisma.petOwner.findMany({
      select: {
        id: true,
        userId: true,
        fullAddress: true,
        nis: true,
        type: true,
        user: {
          select: {
            completeName: true,
            cpf: true,
            cnpj: true,
            email: true,
            phone: true,
          },
        },
        _count: {
          select: { animals: true },
        },
      },
    });
  }

  async findPetOwnerById(userId: number) {
    const petOwner = await this.prisma.petOwner.findUnique({
      where: { userId: userId },
      select: {
        id: true,
        userId: true,
        fullAddress: true,
        nis: true,
        type: true,
        user: {
          select: {
            completeName: true,
            email: true,
            cpf: true,
            cnpj: true,
            phone: true,
          },
        },
        _count: {
          select: { animals: true },
        },
      },
    });

    if (!petOwner) {
      throw new NotFoundException('Pet owner not found');
    }

    return petOwner;
  }

  async findPetOwnerByPetOwnerId(petOwnerId: number) {
    const petOwner = await this.prisma.petOwner.findUnique({
      where: { id: petOwnerId },
      select: {
        id: true,
        userId: true,
        fullAddress: true,
        nis: true,
        type: true,
        user: {
          select: {
            id: true,
            completeName: true,
            cpf: true,
            cnpj: true,
            phone: true,
          },
        },
        _count: {
          select: { animals: true },
        },
      },
    });

    if (!petOwner) {
      throw new NotFoundException('Pet owner not found');
    }

    return petOwner;
  }

  async findMyProfile(userId: number) {
    const petOwner = await this.prisma.petOwner.findUnique({
      where: { userId: userId },
      include: {
        user: {
          select: { email: true, completeName: true, phone: true, cpf: true, cnpj: true },
        },
        animals: true,
        commitmentTerms: true,
      },
    });

    if (!petOwner) {
      throw new NotFoundException('Profile not found for this user.');
    }
    return petOwner;
  }

  async findPetOwnerByEmail(email: string) {
    const petOwner = await this.prisma.petOwner.findFirst({
      where: {
        user: {
          email: email,
        },
      },
    });

    if (!petOwner) {
      throw new NotFoundException('Pet owner not found');
    }

    return petOwner;
  }

  async createPetOwner(userId: number, dto: CreatePetOwnerDto) {
  try {
    const user = await this.prisma.user.findUnique({
          where: { id: userId },
        });
    
        if (!user) {
          throw new NotFoundException('User not found');
        }
    
    const petOwner = await this.prisma.petOwner.create({
      data: {
        userId,
        fullAddress: dto.fullAddress,
        nis: dto.nis,
        type: dto.type || 'individual',
      },
      include: {
        user: {
          select: {
            id: true,
            completeName: true,
            email: true,
            cpf: true,
            cnpj: true,
            phone: true,
            role: true,
          },
        },
        commitmentTerms: {
          select: {
            id: true,
            documentUrl: true,
            signatureDate: true,
          },
        },
      },
    });

    if (dto.documentUrl) {
      const commitmentTerm = await this.prisma.commitmentTerm.create({
        data: {
          petOwnerId: petOwner.id,
          documentUrl: dto.documentUrl,
          signatureDate: new Date(),
        },
      });

      (petOwner as any).commitmentTerms = [commitmentTerm];
    }

    return petOwner;
  } catch (error) {
    if (error instanceof NotFoundException) {
      throw error;
    }
    throw new ConflictException(`Error creating pet owner: ${error.message}`);
  }
}


  async updatePetOwner(userId: number, dto: UpdatePetOwnerDto) {
    const existingUser = await this.findPetOwnerById(userId);

    if (!existingUser) {
      throw new NotFoundException(`User with ID ${userId} not found.`);
    }

    if (dto.email || dto.cpf) {
      const conflictingUser = await this.prisma.user.findFirst({
        where: {
          OR: [{ email: dto.email }, { cpf: dto.cpf }],
          id: { not: userId },
        },
      });

      if (conflictingUser) {
        throw new ConflictException('Email or CPF already in use by another user.');
      }
    }

    const {
      fullAddress,
      email,
      password,
      phone,
      completeName,
      cpf
    } = dto;

    const userDataToUpdate: any = {};

    if (email) userDataToUpdate.email = email;
    if (phone) userDataToUpdate.phone = phone;
    if (completeName) userDataToUpdate.completeName = completeName;
    if (cpf) userDataToUpdate.cpf = cpf;

    if (password) {
      userDataToUpdate.hashedPassword = await bcrypt.hash(password, 10);
    }

    const petOwnerDataToUpdate: any = {};

    if (fullAddress) petOwnerDataToUpdate.fullAddress = fullAddress;

    try {
      await this.prisma.$transaction(async (tx) => {
        if (Object.keys(userDataToUpdate).length > 0) {
          await tx.user.update({
            where: { id: userId },
            data: userDataToUpdate,
          });
        }

        if (Object.keys(petOwnerDataToUpdate).length > 0) {
          await tx.petOwner.update({
            where: { userId: userId },
            data: petOwnerDataToUpdate,
          });
        }
      });
    } catch (error) {
      throw new ConflictException(`Erro ao atualizar dados: ${error.message}`);
    }

    return this.findPetOwnerById(userId);
  }

  async deletePetOwner(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    try {
      await this.prisma.user.delete({
        where: { id: userId },
      });
      return { message: 'Usuário e todos os dados relacionados foram deletados com sucesso.' };

    } catch (error) {
      throw new ConflictException(`Erro ao deletar usuário: ${error.message}`);
    }
  }

  async findAnimalsByPetOwnerId(userId: number) {
    const petOwner = await this.prisma.petOwner.findUnique({
      where: { userId: userId },
      include: {
        animals: true,
      },
    });

    if (!petOwner) {
      throw new NotFoundException('Pet owner not found');
    }

    const animals = await this.prisma.animal.findMany({
      where: { petOwnerId: petOwner.id },
    });

    return animals;
  }
}
