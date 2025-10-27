import { Injectable, UnauthorizedException } from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import { UserService } from '../user/user.service'
import { TokenService } from '../token/token.service'
import { LoginDto } from '../dto/login.dto'
import { CreateUserDto } from '../dto/create-user.dto'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
  ) {}

  async login(dto: LoginDto) {
    const user = await this.userService.findByEmail(dto.email)

    if (!user) {
      throw new UnauthorizedException('Email ou senha inválidos')
    }

    const passwordMatches = await bcrypt.compare(dto.password, user.hashedPassword)
    if (!passwordMatches) {
      throw new UnauthorizedException('Email ou senha inválidos')
    }

    const tokens = await this.tokenService.createTokens(user.id, user.email, user.role)
    return tokens
  }

  async register(dto: CreateUserDto) {
    const user = await this.userService.create(dto)
    return {
      message: 'Usuario resgistrado com sucesso',
      user,
    }
  }

}
