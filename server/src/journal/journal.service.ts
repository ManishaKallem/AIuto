import { User } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateJournalDto } from './dto/create-journal.dto';
import { UpdateJournalDto } from './dto/update-journal.dto';

@Injectable()
export class JournalService {
  constructor(private prisma: PrismaService) {}

  async create(createJournalDto: CreateJournalDto, user: User) {
    const todo = await this.prisma.journal.create({
      data: {
        ...createJournalDto,
        user: { connect: { id: user.id } },
      },
    });
    return todo;
  }

  async findAll() {
    const todos = await this.prisma.journal.findMany({
      include: { user: true },
    });
    return todos;
  }

  async findOne(id: string) {
    const todo = await this.prisma.journal.findUnique({
      where: { id },
    });
    if (!todo) return false;
    return todo;
  }

  async update(id: string, updateJournalDto: UpdateJournalDto) {
    const todo = await this.prisma.journal.update({
      where: { id },
      data: updateJournalDto,
    });
    return todo;
  }

  async remove(id: number) {
    return `This action removes a #${id} journal`;
  }
}
