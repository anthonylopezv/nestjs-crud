
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true, disableErrorMessages: false }));
  await app.listen(3000);
}
bootstrap();