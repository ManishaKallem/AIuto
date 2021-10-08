import { Module } from '@nestjs/common';
import { PasswordsService } from 'src/auth/passwords.service';
import { PrismaService } from 'src/prisma.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  providers: [UserService, PrismaService, PasswordsService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
