import { ApiProperty } from "@nestjs/swagger";
import { IsEmpty, IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';

export class CreateAnimalDto {
    @ApiProperty({ description: 'Nome do animal.' })
    @IsString()
    @IsOptional()
    name: string;

    @ApiProperty({ description: 'Idade estimada do animal em anos.' })
    @IsString()
    @IsNotEmpty()
    estimatedAge: string;

    @ApiProperty({ description: 'Espécie do animal.' })
    @IsString()
    @IsNotEmpty()
    species: string;

    @ApiProperty({ description: 'Gênero do animal.' })
    @IsString()
    @IsNotEmpty()
    gender: string;

    @ApiProperty({
      description: 'Peso do animal.',
    })
    @IsString()
    @IsNotEmpty()
    sizeWeight: string;

    @ApiProperty({ description: 'Raça do animal.' })
    @IsString()
    @IsOptional()
    breed: string;

    @ApiProperty({
      description: 'Número de microchip do animal.',
    })
    @IsString()
    @IsOptional()
    microchipNumber: string;

    @ApiProperty({
      description: 'ID do proprietário do animal.',
    })
    @IsNumber()
    @IsNotEmpty()
    petOwnerId: number;
}