import { Controller, Post, Body, HttpCode } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AuthService } from './auth.service'
import { LoginDto } from '../dto/login.dto'
import { ApiLogin } from '../decorators/swagger-decorators'
import { CreateUserDto } from '../dto/create-user.dto'
import { UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { RolesGuard } from '../auth/roles.guard'
import { Roles } from '../decorators/role-decorator'
import { ApiBearerAuth } from '@nestjs/swagger'

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
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('administrator')
  async register(@Body() dto: CreateUserDto) {
    return this.authService.register(dto)
  }
}
