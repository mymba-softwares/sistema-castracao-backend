import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAppointmentDto } from './create-appointment.dto';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ServiceType } from '@prisma/client';
import { AppointmentStatus } from '@prisma/client';

export class UpdateAppointmentDto extends PartialType(CreateAppointmentDto) {
    @ApiProperty({
        description: 'Data e hora de início do agendamento.',
    })
    @IsOptional()
    startTime?: Date;

    @ApiProperty({
        description: 'Data e hora de término do agendamento.',
    })
    @IsOptional()
    endTime?: Date;

    @ApiProperty({
        description: 'Tipo de serviço para o agendamento.',
        enum: ServiceType,
    })
    @IsEnum(ServiceType)
    @IsOptional()
    serviceType?: ServiceType;

    @ApiProperty({
        description: 'Status do agendamento.',
        enum: AppointmentStatus,
    })
    @IsEnum(AppointmentStatus)
    @IsOptional()
    status?: AppointmentStatus;

    @ApiProperty({
        description: 'Notas adicionais para o agendamento.',
    })
    @IsOptional()
    @IsString()
    notes?: string;
}
