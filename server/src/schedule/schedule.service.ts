import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateScheduleDto } from './dto/schedule.dto';

@Injectable()
export class ScheduleService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createScheduleDto: CreateScheduleDto, user: User) {
    const data = {
      ...createScheduleDto,
      user: { connect: { id: user.id } },
    };
    const schedule = await this.prisma.schedule.create({ data });
    return schedule;
  }

  async getSchedules(user: User) {
    return await this.prisma.schedule.findMany({
      where: { userId: user.id },
      orderBy: { startTime: 'asc' },
    });
  }
}
