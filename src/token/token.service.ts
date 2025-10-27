import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { JwtService } from '@nestjs/jwt'
import { UserService } from '../user/user.service'
import { jwtConstants } from '../auth/constants'
import { JwtPayload } from '../interfaces/jwt-payload'

@Injectable()
export class TokenService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService,
        private usersService: UserService,
    ) {}

    async createTokens(userId: number, email: string, role: string) {
        const accessToken = await this.jwtService.signAsync(
            { sub: userId, email, role  },
            { secret: jwtConstants.accessSecret, expiresIn: '1h' }
        )
        const refreshToken = await this.jwtService.signAsync(
            { sub: userId },
            { secret: jwtConstants.refreshSecret, expiresIn: '14d' }
        )

        await this.prisma.token.upsert({
  where: { userId },
  update: { 
    refreshJwt: refreshToken,
    jwt: accessToken, 
  },
  create: { 
    userId, 
    refreshJwt: refreshToken,
    jwt: accessToken,
  },
})



        return { accessToken, refreshToken }
    }

    async isTokenValid(userId: number, jti: string) {
        const token = await this.prisma.token.findFirst({
            where: { userId, jwt: jti },
        })
        return !!token
    }

    async refreshTokens(oldRefreshToken: string) {
    try {
        const payload = await this.jwtService.verifyAsync<JwtPayload>(
                oldRefreshToken,
                {
                    secret: jwtConstants.refreshSecret,
                },
            )

        const userId = payload.sub
        const tokenRecord = await this.prisma.token.findFirst({
            where: { userId, refreshJwt: oldRefreshToken },
        })
        if (!tokenRecord) {
            throw new Error('Refresh token inválido ou expirado')
        }

        await this.prisma.token.delete({ where: { id: tokenRecord.id } })

        const user = await this.usersService.findById(userId)
        if (!user) {
            throw new Error('Usuário não encontrado')
        }

        const newTokens = await this.createTokens(user.id, user.email, user.role)

        return newTokens
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error('Falha ao renovar token: ' + error.message)
        } else {
            throw new Error('Falha ao renovar token: erro interno no servidor')
        }
    }
}

    async revokeAll(userId: number) {
        await this.prisma.token.deleteMany({ where: { userId } })
    }
}
