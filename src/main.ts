import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import helmet from '@fastify/helmet'


async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  );
  // adding security
  await app.register(helmet);
  
  // somewhere in your initialization file
  await app.listen(3000, '0.0.0.0');
  console.log('Application is running on port 3000 and is happy to do so!');
}
bootstrap();
