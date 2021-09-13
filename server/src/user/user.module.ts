import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  providers: [UserResolver, UserService, PrismaService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
