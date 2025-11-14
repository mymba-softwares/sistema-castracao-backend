import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAnimalDto } from './create-animal.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateAnimalDto extends PartialType(CreateAnimalDto) {
    @ApiProperty({
      description: 'Nome do animal.',
    })
    @IsString()
    @IsOptional()
    name: string;

    @ApiProperty({
      description: 'Raça do animal.',
    })
    @IsString()
    @IsOptional()
    breed: string;

    @ApiProperty({
      description: 'Especíe do animal.',
    })
    @IsString()
    @IsOptional()
    species: string;

    @ApiProperty({
      description: 'Gênero do animal.',
    })
    @IsString()
    @IsOptional()
    gender: string;

    @ApiProperty({
      description: 'Peso do animal.',
    })
    @IsNumber()
    @IsOptional()
    sizeWeight: string;

    @ApiProperty({
      description: 'microchipNumber do animal.',
    })
    @IsString()
    @IsOptional()
    microchipNumber: string;

    @ApiProperty({
      description: 'Idade estimada do animal em anos.',
    })
    @IsString()
    @IsOptional()
    estimatedAge: string;
}
