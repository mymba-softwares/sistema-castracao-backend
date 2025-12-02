import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt, IsOptional, IsObject, IsArray } from 'class-validator';

export class SendPushNotificationDto {
  @ApiProperty({
    description: 'ID do usuário ou array de IDs dos usuários que receberão a notificação',
    example: 1,
  })
  @IsNotEmpty()
  userIds: number | number[];

  @ApiProperty({
    description: 'Título da notificação push',
    example: 'Lembrete de Consulta',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Corpo da notificação push',
    example: 'Você tem uma consulta agendada para amanhã às 14h.',
  })
  @IsNotEmpty()
  @IsString()
  body: string;

  @ApiPropertyOptional({
    description: 'Dados adicionais para a notificação',
    example: { appointmentId: '123', screen: 'AppointmentDetails' },
  })
  @IsOptional()
  @IsObject()
  data?: Record<string, string>;

  @ApiPropertyOptional({
    description: 'URL da imagem da notificação',
    example: 'https://example.com/image.png',
  })
  @IsOptional()
  @IsString()
  imageUrl?: string;
}
