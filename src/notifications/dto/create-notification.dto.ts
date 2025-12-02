import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt, IsOptional, IsEnum, IsObject } from 'class-validator';
import { NotificationChannel } from '@prisma/client';

export class CreateNotificationDto {
  @ApiProperty({
    description: 'ID do usuário que receberá a notificação',
    example: 1,
  })
  @IsNotEmpty()
  @IsInt()
  userId: number;

  @ApiProperty({
    description: 'Título da notificação',
    example: 'Lembrete de Consulta',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Mensagem da notificação',
    example: 'Você tem uma consulta agendada para amanhã às 14h.',
  })
  @IsNotEmpty()
  @IsString()
  message: string;

  @ApiPropertyOptional({
    description: 'Canal de envio da notificação',
    enum: NotificationChannel,
    example: NotificationChannel.push,
  })
  @IsOptional()
  @IsEnum(NotificationChannel)
  channel?: NotificationChannel;

  @ApiPropertyOptional({
    description: 'Metadados adicionais (JSON)',
    example: { appointmentId: 123, type: 'reminder' },
  })
  @IsOptional()
  @IsObject()
  metadata?: Record<string, any>;
}
