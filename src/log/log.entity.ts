import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Log {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: 'info' | 'error';

  @Column()
  subject: string;

  @Column({ default: true })
  content: boolean;
}
