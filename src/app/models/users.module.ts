/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersController } from '../controller/users.controller';
import { UsersService } from '../service/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../Entities/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule { }
