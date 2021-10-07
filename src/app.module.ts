import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';


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

    } as TypeOrmModuleOptions)
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
