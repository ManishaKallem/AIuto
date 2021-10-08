import { Module } from '@nestjs/common';
import { NavigatorService } from './navigator.service';
import { NavigatorController } from './navigator.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [NavigatorController],
  providers: [NavigatorService, PrismaService],
})
export class NavigatorModule {}
