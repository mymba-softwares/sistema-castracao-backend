import { Controller, Post, Body, HttpCode, UseGuards } from '@nestjs/common'
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger'
import { AuthService } from './auth.service'
import { LoginDto } from '../dto/login.dto'
import { ForgotPasswordDto, ResetPasswordDto } from '../dto/password-reset.dto'
import { ApiLogin } from '../decorators/swagger-decorators'
import { ApiRegister, ApiForgotPassword, ApiResetPassword } from './auth.swagger'
import { CreateUserDto } from '../dto/create-user.dto'
import { JwtAuthGuard } from './jwt-auth.guard'
import { RolesGuard } from './roles.guard'
import { Roles } from '../decorators/role-decorator'

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(200)
  @ApiLogin()
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto)
  }

  @Post('register')
  @HttpCode(201)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('administrator', 'receptionist', 'semas')
  @ApiRegister()
  async register(@Body() dto: CreateUserDto) {
    return this.authService.register(dto)
  }

  @Post('forgot-password')
  @HttpCode(200)
  @ApiForgotPassword()
  async forgotPassword(@Body() dto: ForgotPasswordDto) {
    return this.authService.forgotPassword(dto)
  }

  @Post('reset-password')
  @HttpCode(200)
  @ApiResetPassword()
  async resetPassword(@Body() dto: ResetPasswordDto) {
    return this.authService.resetPassword(dto)
  }
}
