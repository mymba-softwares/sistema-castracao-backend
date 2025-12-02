import { ApiProperty } from "@nestjs/swagger";
import { AppointmentStatus, ServiceType } from "@prisma/client";
import { IsDateString, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

export class CreateAppointmentDto {
    @ApiProperty({
      description: 'ID do animal para o agendamento.',
    })
    @IsNumber()
    @IsNotEmpty()
    animalId: number;

    @ApiProperty({
      description: 'ID do proprietário do animal.',
    })
    @IsNumber()
    @IsNotEmpty()
    petOwnerId: number;

    @ApiProperty({
      description: 'ID do veterinário designado para o atendimento (opcional). Pode ser atribuído na criação ou posteriormente via atualização.',
      required: false,
      example: 1,
    })
    @IsNumber()
    @IsOptional()
    veterinarianId?: number;
    
    @ApiProperty({
      description: 'Data e hora de início do agendamento.',
    })
    @IsDateString()
    @IsNotEmpty()
    startTime: Date;

    @ApiProperty({
      description: 'Data e hora de término do agendamento.',
    })
    @IsDateString()
    @IsNotEmpty()
    endTime: Date;

    @ApiProperty({
      description: 'Tipo de serviço para o agendamento.',
      enum: ServiceType,
      required: false,
    })
    @IsEnum(ServiceType)
    @IsOptional()
    serviceType?: ServiceType;

    @ApiProperty({
      description: 'Status do agendamento.',
      enum: AppointmentStatus,
      required: false,
      default: AppointmentStatus.scheduled,
    })
    @IsEnum(AppointmentStatus)
    @IsOptional()
    status?: AppointmentStatus;

    @ApiProperty({
      description: 'Notas adicionais para o agendamento.',
      required: false,
    })
    @IsString()
    @IsOptional()
    notes?: string;
}