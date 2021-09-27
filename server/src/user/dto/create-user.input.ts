import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  MinLength,
} from 'class-validator';
import { IsPasswordValid } from 'src/utils';

export class CreateUserInput {
  /*
  The username of the new user
  @example 'IgnisDa'
   */
  @IsNotEmpty()
  @IsAlphanumeric()
  username: string;

  /* The email of the new user */
  @IsNotEmpty()
  @IsEmail()
  email: string;

  /* The password of the new user */
  @IsPasswordValid()
  @MinLength(10)
  password: string;
}
