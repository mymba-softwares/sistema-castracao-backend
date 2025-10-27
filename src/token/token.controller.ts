import { Controller, Post, HttpCode, UseGuards, Headers, Param } from '@nestjs/common'
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger'
import { TokenService } from './token.service'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { RolesGuard } from 'src/auth/roles.guard'
import {
    ApiUnauthorizedResponse,
    ApiInternalServerErrorResponse,
} from '../decorators/swagger-decorators'
import { JsonWebTokenError } from '@nestjs/jwt'
import { Roles } from 'src/decorators/role-decorator'

@ApiTags('Token')
@Controller('auth')
export class TokenController {
    constructor(private readonly tokenService: TokenService) {}

    @Post('refresh')
    @HttpCode(200)
    @ApiBearerAuth('refresh-token')
    @ApiOperation({ summary: 'Refresh access and refresh tokens' })
    @ApiUnauthorizedResponse()
    @ApiInternalServerErrorResponse()
    async refreshToken(@Headers('authorization') authHeader: string) {
        if (!authHeader) {
            throw new JsonWebTokenError("Token não fornecido")
        }

        const [bearer, token] = authHeader.split(' ')
        if (bearer !== 'Bearer' || !token) {
            throw new JsonWebTokenError("Token não fornecido")
        }

        return this.tokenService.refreshTokens(token)
    }


    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('administrator')
    @ApiBearerAuth('access-token')
    @Post('revoke-all/:id')
    async revokeAll(@Param('id') id: string) {
        const userId = Number(id);
        await this.tokenService.revokeAll(userId);
        return { message: 'Todos os tokens foram revogados' };
    }

}
