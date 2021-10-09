/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { UsersController } from './app/controller/users.controller';
import { UsersModule } from './app/models/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPE_ORM_CONNECTION,
      host: process.env.TYPE_ORM_HOST,
      port: process.env.TYPE_ORM_PORT,
      username: process.env.TYPE_ORM_USERNAME,
      password: process.env.TYPE_ORM_PASSWORD,
      database: process.env.TYPE_ORM_DATABASE,
      entities: [__dirname + '/**/*.entity{.js,.ts}'],
      synchronize: true,
    } as TypeOrmModuleOptions),
    UsersModule,
    AuthModule,
  ],
    controllers: [UsersController],
    providers: [],
})
export class AppModule { }

// [TypeOrmModule.forRootAsync({
//   useFactory: async () =>
//     Object.assign(await getConnectionOptions(), {
//       autoLoadEntities: true
//     })
// }),
 

// ConfigModule.forRoot(),
// TypeOrmModule.forRoot({
//   type: process.env.TYPE_ORM_CONNECTION,
//   host: process.env.TYPE_ORM_HOST,
//   port: process.env.TYPE_ORM_PORT,
//   username: process.env.TYPE_ORM_USERNAME,
//   password: process.env.TYPE_ORM_PASSWORD,
//   database: process.env.TYPE_ORM_DATABASE,
//   entities: [__dirname + '/**/*.entity{.js,.ts}'],
//   synchronize: true,
// } as TypeOrmModuleOptions),