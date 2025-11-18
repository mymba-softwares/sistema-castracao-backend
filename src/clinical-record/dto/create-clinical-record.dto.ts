import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsInt, IsBoolean, IsString, IsDateString } from 'class-validator';
import { ClinicalRecordType, SurgeryType } from '@prisma/client';

export class CreateClinicalRecordDto {
  @ApiProperty({ description: 'ID do prontuário médico' })
  @IsInt()
  medicalRecordId: number;

  @ApiProperty({ description: 'ID do agendamento (opcional)', required: false })
  @IsOptional()
  @IsInt()
  appointmentId?: number;

  @ApiProperty({ description: 'ID do veterinário responsável' })
  @IsInt()
  veterinarianId: number;

  @ApiProperty({ 
    description: 'Tipo do registro clínico',
    enum: ClinicalRecordType,
    example: 'triage'
  })
  @IsEnum(ClinicalRecordType)
  type: ClinicalRecordType;

  @ApiProperty({ description: 'Data do atendimento', required: false })
  @IsOptional()
  @IsDateString()
  treatmentDate?: string;

  @ApiProperty({ description: 'Apto para cirurgia (triagem)', required: false })
  @IsOptional()
  @IsBoolean()
  fitForSurgery?: boolean;

  @ApiProperty({ 
    description: 'Tipo de cirurgia realizada',
    enum: SurgeryType,
    required: false
  })
  @IsOptional()
  @IsEnum(SurgeryType)
  surgeryType?: SurgeryType;

  @ApiProperty({ description: 'Observações gerais do veterinário', required: false })
  @IsOptional()
  @IsString()
  observations?: string;

  @ApiProperty({ description: 'Prescrições e instruções', required: false })
  @IsOptional()
  @IsString()
  instructions?: string;
}
