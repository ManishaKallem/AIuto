import { Injectable, Logger } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateNavigatorDto } from './dto/navigator.dto';

@Injectable()
export class NavigatorService {
  constructor(private readonly prisma: PrismaService) {}

  private logger = new Logger(NavigatorService.name);

  async create(createNavigatorDto: CreateNavigatorDto, user: User) {
    const existingMoodEntry = await this.prisma.moodEntry.findFirst({
      where: { on: createNavigatorDto.on, userId: user.id },
    });
    if (existingMoodEntry) {
      // update the existing record
      const resp = await this.prisma.moodEntry.update({
        where: { id: existingMoodEntry.id },
        data: {
          mood: createNavigatorDto.mood,
        },
      });
      return resp;
    }
    // create a new mood entry
    const moodEntry = await this.prisma.moodEntry.create({
      data: {
        on: createNavigatorDto.on,
        mood: createNavigatorDto.mood,
        userId: user.id,
      },
    });
    return moodEntry;
  }

  async findUserNavigators(user: User) {
    return await this.prisma.moodEntry.findMany({
      where: { userId: user.id },
      orderBy: { on: 'desc' },
    });
  }
}
