import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
          secret:  configService.get('jwt.secret'),
          signOptions: {
              expiresIn: configService.get('jwt.expiresIn'),
          },
      }),
      inject: [ConfigService],
  }),

  ],
  providers: [
    AuthService,
      {
        provide: APP_GUARD,
        useClass: AuthGuard,
      },
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
