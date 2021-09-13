import { Module } from '@nestjs/common';
import { JournalService } from './journal.service';
import { JournalController } from './journal.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [JournalController],
  providers: [JournalService, PrismaService],
})
export class JournalModule {}
