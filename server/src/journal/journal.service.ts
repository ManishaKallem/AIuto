import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateJournalDto } from './dto/create-journal.dto';
import { UpdateJournalDto } from './dto/update-journal.dto';

@Injectable()
export class JournalService {
  constructor(private prisma: PrismaService) {}

  create(createJournalDto: CreateJournalDto) {
    return 'This action adds a new journal';
  }

  async findAll() {
    const todos = await this.prisma.journal.findMany();
    return todos;
  }

  async findOne(id: string) {
    const todo = await this.prisma.journal.findUnique({
      where: {
        id: id,
      },
    });
    if (!todo) return false;
    return todo;
  }

  update(id: number, updateJournalDto: UpdateJournalDto) {
    return `This action updates a #${id} journal`;
  }

  remove(id: number) {
    return `This action removes a #${id} journal`;
  }
}
