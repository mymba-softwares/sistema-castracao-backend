import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength, IsBoolean } from 'class-validator';
import { Role } from '@prisma/client';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  completeName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsNotEmpty()
  @IsString()
  cpf: string;

  @IsOptional()
  phone: string;

  @IsNotEmpty()
  @IsEnum(Role)
  role: Role;

  @IsOptional()
  @IsString()
  crmv?: string;

  @IsOptional()
  @IsString()
  specialty?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  nis?: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}
