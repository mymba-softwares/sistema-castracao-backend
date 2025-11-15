import { ApiProperty } from "@nestjs/swagger";
import { AppointmentStatus, ServiceType } from "@prisma/client";
import { IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateAppointmentDto {
    @ApiProperty({
      description: 'ID do animal para o agendamento.',
    })
    @IsNumber()
    @IsNotEmpty()
    animalId: number

    @ApiProperty({
        description: 'ID do proprietário do animal.',
    })
    @IsNumber()
    @IsNotEmpty()
    petOwnerId: number;
    
    @ApiProperty({
      description: 'Data e hora de início do agendamento.',
    })
    @IsNotEmpty()
    startTime: Date;

    @ApiProperty({
      description: 'Data e hora de término do agendamento.',
    })
    @IsNotEmpty()
    endTime: Date;

    @ApiProperty({
      description: 'Tipo de serviço para o agendamento.',
      enum: ServiceType,
    })
    @IsNotEmpty()
    serviceType: ServiceType;

    @ApiProperty({
        description: 'Status do agendamento.',
        enum: AppointmentStatus,
    })
    @IsNotEmpty()
    status: AppointmentStatus;

    @ApiProperty({
      description: 'Notas adicionais para o agendamento.',
    })
    @IsOptional()
    notes: string;
}