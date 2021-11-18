import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { ApiAuthGuard } from 'src/auth/guards/api-auth.guard';
import { CreateJournalDto } from 'src/journal/dto/journal.dto';
import { SocialService } from './social.service';

@Controller('social')
export class SocialController {
  constructor(private readonly socialService: SocialService) {}

  @UseGuards(ApiAuthGuard)
  @Post('group')
  async create(
    @Body() createGroupDto: CreateJournalDto,
    @CurrentUser() user: User,
  ) {
    return await this.socialService.createGroup(createGroupDto, user);
  }

  @UseGuards(ApiAuthGuard)
  @Get('group')
  async getGroups(@CurrentUser() user: User) {
    return await this.socialService.getGroups(user);
  }

  @UseGuards(ApiAuthGuard)
  @Post('group/:id/set-invite-string')
  async setInviteString(@Param('id') id: string, @CurrentUser() user: User) {
    try {
      const result = await this.socialService.setInviteString(id, user);
      return result;
    } catch ($e) {
      console.error($e);
      throw new BadRequestException($e);
    }
  }

  @UseGuards(ApiAuthGuard)
  @Put('group/join')
  async joinGroup(
    @Query('inviteString') inviteString: string,
    @CurrentUser() user: User,
  ) {
    return await this.socialService.joinGroup(inviteString, user);
  }
}
