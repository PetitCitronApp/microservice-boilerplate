import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Log } from './log.entity';

@Injectable()
export class LogService {
  constructor(
    @InjectRepository(Log)
    private logsRepository: Repository<Log>,
  ) {}

  findAll(): Promise<Log[]> {
    return this.logsRepository.find();
  }

  findOne(id: number): Promise<Log | null> {
    return this.logsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.logsRepository.delete(id);
  }
}
