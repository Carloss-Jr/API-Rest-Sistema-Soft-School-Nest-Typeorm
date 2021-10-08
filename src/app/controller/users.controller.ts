/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto } from '../Dtos/create.users.dto';
import { UsersService } from '../service/users.service';
import { UpdateUserDto } from '../Dtos/update.users.dto';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  async index() {
    return await this.usersService.findAll();
  }

  @Post()
  async store(@Body() body: CreateUserDto) {
    return await this.usersService.create(body);
  }

  @Get(':id')
  async show(@Param('id', new ParseIntPipe()) id: number) {
    return await this.usersService.findOneOrFail({ id });
  }

  @Put(':id')
  async update(@Param('id', new ParseIntPipe()) id: number, @Body() body: UpdateUserDto) {
    return await this.usersService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', new ParseIntPipe()) id: number) {
    return await this.usersService.delete(id);
  }
}
