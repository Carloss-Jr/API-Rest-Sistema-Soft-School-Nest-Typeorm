/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { UserEntity } from '../Entities/users.entity';
import { UpdateUserDto } from '../Dtos/update.users.dto';
import { CreateUserDto } from '../Dtos/create.users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) { }

  async findAll() {
    return await this.userRepository.find({
      select: ['id', 'name', 'email', 'password'],
    })
  }

  async findOneOrFail(
    conditions: FindConditions<UserEntity>,
    options?: FindOneOptions<UserEntity>
  ) {
    try {
      return await this.userRepository.findOneOrFail(conditions, options)
    } catch (error) {
      throw new NotFoundException(error.message)
    }
  }

  async create(data: CreateUserDto) {
    const user = this.userRepository.create(data)
    data.provider = true
    return await this.userRepository.save(user)
  }

  async update(id: number, data: UpdateUserDto) {
    const user = await this.findOneOrFail({ id })
    this.userRepository.merge(user, data)
    return await this.userRepository.save(user)
  }

  async delete(id: number) {
    await this.userRepository.findOneOrFail({ id })
    this.userRepository.softDelete({ id })
  }
}
