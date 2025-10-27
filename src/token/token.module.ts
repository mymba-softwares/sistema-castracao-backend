import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokenController } from './token.controller';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [JwtModule, UserModule, PrismaModule],
  providers: [TokenService],
  controllers: [TokenController],
  exports: [TokenService],
})
export class TokenModule {}
