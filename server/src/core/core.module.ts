import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CronService } from './services/cron.service';

@Module({
  providers: [CronService, PrismaService],
})
export class CoreModule {}
