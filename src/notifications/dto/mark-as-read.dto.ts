import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsInt, IsArray } from 'class-validator';

export class MarkAsReadDto {
  @ApiProperty({
    description: 'ID da notificação ou array de IDs a serem marcadas como lidas',
    example: [1, 2, 3],
  })
  @IsNotEmpty()
  notificationIds: number | number[];
}
