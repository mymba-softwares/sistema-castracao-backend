import { IsEmail, IsEnum, IsString, MinLength } from 'class-validator'
import { Role } from '@prisma/client'
import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({ enum: Role, description: 'Role of the user' })
  @IsEnum(Role)
  role: Role

  @ApiProperty({ description: 'User email' })
  @IsEmail()
  email: string

  @ApiProperty({ description: 'User password', minLength: 6 })
  @IsString()
  @MinLength(6)
  password: string

  @ApiProperty({ description: 'Full name of the user' })
  @IsString()
  completeName: string

  @ApiProperty({ description: 'Unique CPF of the user' })
  @IsString()
  cpf: string

  @ApiProperty({ description: 'Phone number of the user' })
  @IsString()
  phone: string
}
