import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt, IsOptional } from 'class-validator';

export class RegisterDeviceDto {
  @ApiProperty({
    description: 'ID do usuário',
    example: 1,
  })
  @IsNotEmpty()
  @IsInt()
  userId: number;

  @ApiProperty({
    description: 'Token FCM do dispositivo',
    example: 'dXwK9...:APA91...',
  })
  @IsNotEmpty()
  @IsString()
  fcmToken: string;

  @ApiPropertyOptional({
    description: 'Informações do dispositivo (modelo, SO, etc)',
    example: 'iPhone 14 - iOS 17.1',
  })
  @IsOptional()
  @IsString()
  deviceInfo?: string;
}
