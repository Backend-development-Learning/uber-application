import { NestFactory } from '@nestjs/core';
import { RiderServicesModule } from './rider-services.module';

async function bootstrap() {
  const app = await NestFactory.create(RiderServicesModule);
  await app.listen(process.env.port ?? 3003);
}
bootstrap();
