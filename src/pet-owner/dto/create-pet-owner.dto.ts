import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsNotEmpty, MinLength, IsOptional } from 'class-validator';

export class CreatePetOwnerDto {
    @ApiProperty({ description: 'Endereço completo.' })
    @IsString()
    @IsNotEmpty()
    fullAddress: string;

    @ApiProperty({ description: 'Número de Identificação Social (opcional).', required: false })
    @IsString()
    @IsOptional()
    nis?: string;

    @ApiProperty({ description: 'URL de um documento assinado (opcional).', required: false })
    @IsString()
    @IsOptional()
    documentUrl?: string;
}