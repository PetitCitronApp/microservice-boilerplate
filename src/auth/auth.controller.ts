import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Get('login')
  signIn(@Body() signInDto: Record<string, any>) {
    // return this.authService.signIn(signInDto.username, signInDto.password);
    return 'hello'; 
  }

  @Get('profile')
  getProfile(@Request() req) {
    return 'req.user';
  }
}
