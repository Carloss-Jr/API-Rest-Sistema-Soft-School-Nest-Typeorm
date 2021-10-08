import { IsEmail, IsNotEmpty, Matches } from 'class-validator';
import { RegExHelper } from 'src/helpers/regex.helper';

export class UpdateUserDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Matches(RegExHelper.password)
  password: string;
}
