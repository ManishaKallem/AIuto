import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { checkPropertiesExists } from 'src/utils';
import { PrismaService } from 'src/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { PasswordsService } from 'src/auth/passwords.service';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly passwordService: PasswordsService,
  ) {}

  async findAll() {
    return await this.prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
      },
    });
  }

  findOne(id: string) {
    const maybeUser = this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    if (!maybeUser) return false;
    return maybeUser;
  }

  async createUser(createUserInput: CreateUserInput) {
    const errors = {
      usernameErrors: [],
      emailErrors: [],
    };
    const resp = { status: false, resp: null };
    const usernameExists = await this.prisma.user.count({
      where: {
        username: { equals: createUserInput.username },
      },
    });
    if (usernameExists !== 0)
      errors.usernameErrors.push('this user already exists');
    const emailExists = await this.prisma.user.count({
      where: {
        email: { equals: createUserInput.email },
      },
    });
    if (emailExists !== 0) errors.emailErrors.push('this email already exists');
    if (!checkPropertiesExists(Object(errors))) {
      resp.resp = errors;
      return resp;
    }
    resp.status = true;
    resp.resp = await this.prisma.user.create({
      data: {
        ...createUserInput,
        password: await this.passwordService.getPasswordDigest(
          createUserInput.password,
        ),
      },
      select: {
        id: true,
        username: true,
        email: true,
      },
    });
    return resp;
  }

  async getUserByUsername(username: string) {
    return await this.prisma.user.findUnique({ where: { username } });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const errors = {
        usernameErrors: [],
        emailErrors: [],
      };
      const resp = { status: false, resp: null };
      const usernameExists = await this.prisma.user.count({
        where: {
          username: { equals: updateUserDto.username },
        },
      });
      if (usernameExists !== 0)
        errors.usernameErrors.push('this user already exists');
      const emailExists = await this.prisma.user.count({
        where: {
          email: { equals: updateUserDto.email },
        },
      });
      if (emailExists !== 0)
        errors.emailErrors.push('this email already exists');
      if (!checkPropertiesExists(Object(errors))) {
        resp.resp = errors;
        return resp;
      }
      const user = await this.prisma.user.update({
        where: { id },
        data: updateUserDto,
        select: {
          id: true,
          username: true,
          email: true,
        },
      });
      return user;
    } catch {
      return false;
    }
  }

  async remove(id: string) {
    try {
      await this.prisma.user.delete({ where: { id } });
      return true;
    } catch {
      return false;
    }
  }
}
