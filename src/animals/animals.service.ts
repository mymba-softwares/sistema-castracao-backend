import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Gender, Species } from '@prisma/client';

@Injectable()
export class AnimalsService {
  constructor(private prisma: PrismaService) {}

  async findAllAnimals() {
    return this.prisma.animal.findMany({
      include: {
        petOwner: true
      },
    })
  }

  async findAnimalById(id: number) {
    const animal = await this.prisma.animal.findUnique({
      where: { id: id },
      include: {
        petOwner: true
      },
    });

    if (!animal) {
      throw new NotFoundException('Animal not found');
    }

    return animal;
  }

  async createAnimal(dto: CreateAnimalDto) {
    const microchip = (dto.microchipNumber && dto.microchipNumber.trim() !== "")
                        ? dto.microchipNumber.trim()
                        : null;

    if (microchip !== null) {
      const existingAnimal = await this.prisma.animal.findUnique({
        where: { microchipNumber: microchip },
        select: { id: true },
      });

      if (existingAnimal) {
        throw new ConflictException('Animal with this microchip number already exists');
      }
    }

    try {
      const data = {
        ...dto,
        microchipNumber: microchip,
        species: dto.species as Species,
        gender: dto.gender as Gender, 
      };

      const newAnimal = await this.prisma.animal.create({ data });

      return newAnimal;
    } catch (error) {
      throw new ConflictException(`Error creating animal: ${error.message}`);
    }
  }

  async updateAnimal(id: number, dto: UpdateAnimalDto) {
    try {
      const animal = await this.findAnimalById(id);

      if (!animal) {
        throw new NotFoundException(`Animal with ID ${id} not found.`);
      }

      const {
        name,
        species,
        breed,
        age,
        sizeWeight,
        gender,
        microchipNumber,
      } = dto;

      const animalDataToUpdate: any = {};

      if (name) animalDataToUpdate.name = name;
      if (species) animalDataToUpdate.species = species;
      if (breed) animalDataToUpdate.breed = breed;
      if (age) animalDataToUpdate.age = age;
      if (sizeWeight) animalDataToUpdate.sizeWeight = sizeWeight
      if (gender) animalDataToUpdate.gender = gender;
      if (microchipNumber) animalDataToUpdate.microchipNumber = microchipNumber;

      await this.prisma.animal.update({
        where: { id: id },
        data: animalDataToUpdate,
      });
    } catch (error) {
      throw new ConflictException(`Error updating animal: ${error.message}`);
    }

    return this.findAnimalById(id);
  }

  async deleteAnimal(id: number) {
    const animal = await this.findAnimalById(id);

    if (!animal) {
      throw new NotFoundException('Animal not found');
    }

    try {
      await this.prisma.animal.delete({
        where: { id: id },
      });

      return { message: 'Animal deleted successfully.' };
    } catch (error) {
      throw new ConflictException(`Error deleting animal: ${error.message}`);
    }
  }
}
