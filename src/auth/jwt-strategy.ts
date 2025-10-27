import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { JwtPayload } from '../interfaces/jwt-payload'
import { jwtConstants } from './constants'
import { UserService } from '../user/user.service'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UserService,
  ) {
    const secret = jwtConstants.accessSecret
    if (!secret) {
      throw new Error('JWT_SECRET não definido no .env')
    }

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: secret,
    })
  }

  async validate(payload: JwtPayload) {
    
    const user = await this.usersService.findById(payload.sub)
    if (!user) {
      throw new UnauthorizedException({ message: 'Usuario nao encontrado' })
    }
    return user
  }
}
