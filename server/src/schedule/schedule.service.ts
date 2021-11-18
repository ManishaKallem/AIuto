import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateScheduleDto } from './dto/schedule.dto';

@Injectable()
export class ScheduleService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createScheduleDto: CreateScheduleDto, user: User) {
    const schedule = await this.prisma.schedule.create({
      data: {
        ...createScheduleDto,
        user: { connect: { id: user.id } },
      },
    });
    return schedule;
  }
}
