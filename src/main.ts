import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const config = new DocumentBuilder()
    .setTitle('Sistema de Gestão de Castração API')
    .setDescription('API para gerenciamento de castrações de animais')
    .setVersion('1.0')
    .addBearerAuth(
  { type: 'http', scheme: 'bearer', bearerFormat: 'JWT', name: 'Authorization', in: 'header' },
  'access-token',
)
.addBearerAuth(
  { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
  'refresh-token',
)
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
