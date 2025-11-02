import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { TokenModule } from './token/token.module';
import { AuthModule } from './auth/auth.module';
import { PetOwnerModule } from './pet-owner/pet-owner.module';

@Module({
  imports: [UserModule, PrismaModule, TokenModule, AuthModule, PetOwnerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
