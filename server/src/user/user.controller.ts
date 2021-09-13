import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserInput: CreateUserInput) {
    const resp = await this.userService.createUser(createUserInput);
    if (resp.status) return resp;
    throw new BadRequestException(resp);
  }

  @Get()
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const resp = await this.userService.findOne(id);
    if (!resp) throw new NotFoundException('The given journal was not found');
    return resp;
  }

  //   @Patch(':id')
  //   async update(
  //     @Param('id') id: string,
  //     @Body() updateJournalDto: UpdateJournalDto,
  //   ) {
  //     return this.userService.update(id, updateJournalDto);
  //   }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const wasDeleted = await this.userService.remove(id);
    if (!wasDeleted) throw new ConflictException('Unable to delete this user');
    return wasDeleted;
  }
}
