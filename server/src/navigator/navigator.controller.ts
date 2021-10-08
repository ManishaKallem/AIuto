import { User } from '@prisma/client';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { ApiAuthGuard } from 'src/auth/guards/api-auth.guard';
import { CreateNavigatorDto } from './dto/create-navigator.dto';
import { UpdateNavigatorDto } from './dto/update-navigator.dto';
import { NavigatorService } from './navigator.service';

@ApiTags('navigator')
@Controller('navigator')
export class NavigatorController {
  constructor(private readonly navigatorService: NavigatorService) {}

  @UseGuards(ApiAuthGuard)
  @Post()
  async create(
    @CurrentUser() user: User,
    @Body() createNavigatorDto: CreateNavigatorDto,
  ) {
    return await this.navigatorService.create(createNavigatorDto, user);
  }

  @Get()
  findAll() {
    return this.navigatorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.navigatorService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNavigatorDto: UpdateNavigatorDto,
  ) {
    return this.navigatorService.update(+id, updateNavigatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.navigatorService.remove(+id);
  }
}
