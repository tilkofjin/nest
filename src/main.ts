import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 3002
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  console.log(`Service is running on http://localhost:${PORT}`)
}
bootstrap();
