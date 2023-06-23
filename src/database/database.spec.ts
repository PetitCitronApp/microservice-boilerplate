import { Test } from '@nestjs/testing';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

describe('Database configuration', () => {
  let connection: Connection;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRootAsync({
          inject: [ConfigService],
          useFactory: async (configService: ConfigService) => ({
            type: 'mysql',
            host: configService.get('DB_HOST'),
            port: configService.get('DB_PORT'),
            username: configService.get('DB_USERNAME'),
            password: configService.get('DB_PASSWORD'),
            database: configService.get('DB_NAME'),
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            synchronize: true,
          }),
        }),
      ],
    }).compile();

    connection = moduleRef.get(Connection);
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should connect to the database', async () => {
    expect(connection.isConnected).toBe(true);
  });
});
