import { User } from '@prisma/client';
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateNavigatorDto } from './dto/create-navigator.dto';
import { UpdateNavigatorDto } from './dto/update-navigator.dto';

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

  update(id: number, updateNavigatorDto: UpdateNavigatorDto) {
    return `This action updates a #${id} navigator`;
  }

  remove(id: number) {
    return `This action removes a #${id} navigator`;
  }
}
