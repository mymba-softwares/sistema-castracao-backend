import { PartialType } from '@nestjs/swagger';
import { CreateVeterinarianDto } from './create-veterinarian.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateVeterinarianDto extends PartialType(CreateVeterinarianDto) {
  @ApiPropertyOptional({ description: 'Email address' })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiPropertyOptional({ description: 'Password (will be hashed)', minLength: 6 })
  @IsString()
  @MinLength(6)
  @IsOptional()
  password?: string;

  @ApiPropertyOptional({ description: 'Complete name' })
  @IsString()
  @IsOptional()
  completeName?: string;

  @ApiPropertyOptional({ description: 'Phone number' })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiPropertyOptional({ description: 'CPF' })
  @IsString()
  @IsOptional()
  cpf?: string;
}
