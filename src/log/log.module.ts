import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogService } from './log.service';
import { LogsController } from './log.controller';
import { Log } from './log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Log])],
  exports: [TypeOrmModule],
  providers: [LogService],
  controllers: [LogsController],
})
export class LogModule {}
