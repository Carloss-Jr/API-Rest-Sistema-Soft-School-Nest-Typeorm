/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UsersService } from '../app/service/users.service';
import { UserEntity } from '../app/Entities/users.entity';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService) { }

  async login(user) {
    const payload = { sub: user.id, email: user.email }

    return {
      token: this.jwtService.sign(payload)
    }
  }

  async validateUser(email: string, password: string) {
    let user: UserEntity;
    try {
      user = await this.usersService.findOneOrFail({ email });
    } catch (error) {
      return null;
    }

    const isPasswordValid = compareSync(password, user.password);
    if (!isPasswordValid) return null;
    return user
  }
}
