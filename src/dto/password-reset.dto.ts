import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ForgotPasswordDto {
  @ApiProperty({ example: 'user@example.com', description: 'Email do usuário' })
  @IsEmail({}, { message: 'Email inválido' })
  @IsNotEmpty({ message: 'Email é obrigatório' })
  email: string;
}

export class ResetPasswordDto {
  @ApiProperty({ example: 'abc123token', description: 'Token de recuperação recebido por email' })
  @IsString()
  @IsNotEmpty({ message: 'Token é obrigatório' })
  token: string;

  @ApiProperty({ example: 'novaSenha123', description: 'Nova senha', minLength: 6 })
  @IsString()
  @MinLength(6, { message: 'Senha deve ter no mínimo 6 caracteres' })
  @IsNotEmpty({ message: 'Nova senha é obrigatória' })
  newPassword: string;
}
