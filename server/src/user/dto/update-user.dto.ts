import { PartialType } from '@nestjs/mapped-types';
import { CreateUserInput } from './create-user.input';

export class UpdateUserDto extends PartialType(CreateUserInput) {}
