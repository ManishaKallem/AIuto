import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { ApiAuthGuard } from 'src/auth/guards/api-auth.guard';
import { CreateJournalDto } from './dto/create-journal.dto';
import { UpdateJournalDto } from './dto/update-journal.dto';
import { JournalService } from './journal.service';

@ApiTags('journal')
@Controller('journal')
export class JournalController {
  constructor(private readonly journalService: JournalService) {}

  @UseGuards(ApiAuthGuard)
  @Post()
  async create(
    @Body() createJournalDto: CreateJournalDto,
    @CurrentUser() user: User,
  ) {
    return await this.journalService.create(createJournalDto, user);
  }

  @Get()
  async findAll() {
    return await this.journalService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const resp = await this.journalService.findOne(id);
    if (!resp) throw new NotFoundException('The given journal was not found');
    return resp;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateJournalDto: UpdateJournalDto,
  ) {
    return await this.journalService.update(id, updateJournalDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.journalService.remove(+id);
  }
}
