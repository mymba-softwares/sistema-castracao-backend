import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsNotEmpty, MinLength, IsOptional } from 'class-validator';

export class CreatePetOwnerDto {
    @ApiProperty({ description: 'Email do responsável.' })
    @IsEmail()
    email: string;

    @ApiProperty({ description: 'Senha de acesso do responsável.', minLength: 6 })
    @IsString()
    @MinLength(6)
    @IsNotEmpty()
    password: string;

    @ApiProperty({ description: 'Nome completo do responsável.' })
    @IsString()
    @IsNotEmpty()
    completeName: string;

    @ApiProperty({ description: 'CPF do responsável.' })
    @IsString()
    @IsNotEmpty()
    cpf: string;

    @ApiProperty({ description: 'Telefone de contato.' })
    @IsString()
    @IsNotEmpty()
    phone: string;

    @ApiProperty({ description: 'Endereço completo.' })
    @IsString()
    @IsNotEmpty()
    fullAddress: string;

    @ApiProperty({ description: 'URL de um documento assinado (opcional).', required: false })
    @IsString()
    @IsOptional()
    documentUrl?: string;
}