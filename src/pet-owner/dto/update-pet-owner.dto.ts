import { PartialType } from '@nestjs/swagger';
import { CreatePetOwnerDto } from './create-pet-owner.dto';
import { ApiProperty } from '@nestjs/swagger';
import {
    IsEmail,
    IsOptional,
    IsString,
    MinLength,
} from 'class-validator';

export class UpdatePetOwnerDto extends PartialType(CreatePetOwnerDto) {
    @ApiProperty({ description: 'Email do responsável.' })
    @IsEmail()
    @IsOptional()
    email?: string;

    @ApiProperty({ description: 'Senha de acesso do responsável.', minLength: 6 })
    @IsString()
    @MinLength(6)
    @IsOptional()
    password?: string;

    @ApiProperty({ description: 'Nome completo do responsável.' })
    @IsString()
    @IsOptional()
    completeName?: string;

    @ApiProperty({ description: 'Telefone de contato.' })
    @IsString()
    @IsOptional()
    phone?: string;

    @ApiProperty({ description: 'Endereço completo.' })
    @IsString()
    @IsOptional()
    fullAddress?: string;

    @ApiProperty({ description: 'URL de um documento assinado (opcional).' })
    @IsString()
    @IsOptional()
    documentUrl?: string;
}