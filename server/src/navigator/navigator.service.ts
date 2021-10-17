import { Injectable, Logger } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateNavigatorDto, UpdateNavigatorDto } from './dto/navigator.dto';

@Injectable()
export class NavigatorService {
  constructor(private readonly prisma: PrismaService) {}

  private logger = new Logger(NavigatorService.name);

  async create(createNavigatorDto: CreateNavigatorDto, user: User) {
    this.logger.log(createNavigatorDto);
    try {
      const moodEntry = await this.prisma.moodEntry.create({
        data: {
          on: createNavigatorDto.on,
          mood: createNavigatorDto.mood,
          userId: user.id,
        },
      });
      this.logger.debug(moodEntry);
      return moodEntry;
    } catch {
      // a record for this day already exists
      return false;
    }
  }

  findAll() {
    return `This action returns all navigator`;
  }

  findOne(id: number) {
    return `This action returns a #${id} navigator`;
  }

  async update(id: number, updateNavigatorDto: UpdateNavigatorDto) {
    try {
      const moodEntry = await this.prisma.moodEntry.update({
        where: { id: id },
        data: { ...updateNavigatorDto },
      });
      this.logger.debug(moodEntry);
      return moodEntry;
    } catch {
      return false;
    }
  }

  remove(id: number) {
    return `This action removes a #${id} navigator`;
  }
}
