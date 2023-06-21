import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      isGlobal: true
    }),
    AuthModule,
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 150,
    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
