/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { UsersController } from './app/controller/users.controller';
import { UsersModule } from './app/models/users.module';
import { AuthModule } from './auth/auth.module';

// const rootDir = process.env.NODE_ENV === "Development" ? "src": "dist"

// const extensionFIle = process.env.NODE_ENV === "Development" ? "ts": "js"
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: process.env.TYPEORM_PORT,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      synchronize: true,
      extra: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      },
      entities: [
        __dirname + '/**/**/*.entity{.js,.ts}'
      ],
      migrations: [
        __dirname + '/database/migrations/*.js,.ts'
      ],
      cli: {
        migrationsDir: __dirname + "/database/migrations"
      }

    } as TypeOrmModuleOptions),
    UsersModule,
    AuthModule,
  ],
  controllers: [UsersController],
  providers: [],
})
export class AppModule { }

