import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { ApiAuthGuard } from 'src/auth/guards/api-auth.guard';
import { CreateJournalDto } from 'src/journal/dto/journal.dto';
import { SocialService } from './social.service';

@Controller('social')
@ApiTags('social')
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
  @Get('group/message')
  async getGroupsMessages(
    @Query('groupId') groupId: string,
    @CurrentUser() user: User,
  ) {
    try {
      const result = this.socialService.getGroupMessages(groupId, user);
      return result;
    } catch ($e) {
      console.error($e);
      throw new BadRequestException($e);
    }
  }

  @UseGuards(ApiAuthGuard)
  @Post('group/message')
  async postMessageToGroup(
    @Query('groupId') groupId: string,
    @CurrentUser() user: User,
    @Body() body: { contents: string },
  ) {
    try {
      const result = await this.socialService.postMessageToGroup(
        groupId,
        user,
        body.contents,
      );
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
    try {
      const result = await this.socialService.joinGroup(inviteString, user);
      return result;
    } catch ($e) {
      console.error($e);
      throw new BadRequestException($e);
    }
  }
}
