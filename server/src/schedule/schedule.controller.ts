import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { ApiAuthGuard } from 'src/auth/guards/api-auth.guard';
import { CreateScheduleDto } from './dto/schedule.dto';
import { ScheduleService } from './schedule.service';

@ApiTags('schedule')
@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @UseGuards(ApiAuthGuard)
  @Post()
  create(
    @Body() createScheduleDto: CreateScheduleDto,
    @CurrentUser() user: User,
  ) {
    return this.scheduleService.create(createScheduleDto, user);
  }
}
