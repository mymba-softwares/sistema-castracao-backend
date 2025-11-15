import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, IsBoolean } from 'class-validator';

export class CreateVeterinarianDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  crmv: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  active: boolean;
}
