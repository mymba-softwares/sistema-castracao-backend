import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength, IsBoolean } from 'class-validator';
import { Role, PetOwnerType } from '@prisma/client';

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

  @IsOptional()
  @IsString()
  cpf?: string;

  @IsOptional()
  @IsString()
  cnpj?: string;

  @IsOptional()
  phone: string;

  @IsNotEmpty()
  @IsEnum(Role)
  role: Role;

  @IsOptional()
  @IsEnum(PetOwnerType)
  petOwnerType?: PetOwnerType;

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
  @IsString()
  enrollment?: string;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}
