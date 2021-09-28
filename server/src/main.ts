import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('AIuto API')
    .setDescription('The AIuto API description')
    .setVersion('1.0')
    .addTag('aiuto')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('__api', app, document);
  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(8000);
}
bootstrap();
