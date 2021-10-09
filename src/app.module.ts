/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { UsersController } from './app/controller/users.controller';
import { UsersModule } from './app/models/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    useFactory: async () =>
      Object.assign(await getConnectionOptions(), {
        autoLoadEntities: true
      })
  }),
    UsersModule,
    AuthModule,
  ],
  controllers: [UsersController],
  providers: [],
})
export class AppModule { }

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