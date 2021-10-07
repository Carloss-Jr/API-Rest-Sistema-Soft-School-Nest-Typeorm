import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'adminSS',
      database: 'SoftSchool',
      entities: [__dirname + '/**/*.entity{.js,.ts}'],

    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
