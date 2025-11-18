import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateMedicalRecordDto {
  @ApiProperty({ description: 'ID do animal' })
  @IsInt()
  animalId: number;

  @ApiProperty({ description: 'Número do microchip (opcional)', required: false })
  @IsOptional()
  @IsString()
  microchipNumber?: string;
}
