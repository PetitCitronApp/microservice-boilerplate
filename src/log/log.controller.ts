import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { Log } from './log.entity';
import { LogService } from './log.service';
@Controller('logs')
export class LogsController {

  constructor(private logService: LogService) {}
  @Get()
  findAll(@Req() request: Request): Promise<Log[]> {
    return this.logService.findAll();
  }
}
