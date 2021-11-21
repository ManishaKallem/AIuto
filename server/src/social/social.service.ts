import { Injectable, Logger } from '@nestjs/common';
import { User } from '@prisma/client';
import * as crypto from 'crypto';
import { PrismaService } from 'src/prisma.service';
import { GroupDto } from './dto/group.dto';

@Injectable()
export class SocialService {
  private readonly logger = new Logger(SocialService.name);
  constructor(private readonly prisma: PrismaService) {}

  async createGroup(createGroupDto: GroupDto, user: User) {
    const group = await this.prisma.group.create({
      data: {
        ...createGroupDto,
        inviteString: crypto.randomBytes(5).toString('hex'),
        admin: { connect: { id: user.id } },
        users: { connect: [{ id: user.id }] },
      },
    });
    return group;
  }

  async getGroups(user: User) {
    const groups = await this.prisma.user
      .findUnique({ where: { id: user.id } })
      .groups({ include: { _count: true, admin: true } });
    return groups;
  }

  async getGroupMessages(groupId: string, user: User) {
    const group = await this.prisma.group.findUnique({
      where: { id: groupId },
      include: {
        users: true,
        messages: { orderBy: { createdAt: 'asc' }, include: { user: true } },
      },
    });
    if (!group)
      return Promise.reject({
        message: `A group with id=${groupId} does not exist`,
      });
    let groupUser = false;
    for (const u of group.users)
      if (u.id === user.id) {
        groupUser = true;
        break;
      }
    if (!groupUser)
      return Promise.reject({
        message: `User ${user.username} is not a part of group ${group.title}`,
      });
    return group;
  }

  async postMessageToGroup(groupId: string, user: User, contents: string) {
    const group = await this.prisma.group.findUnique({
      where: { id: groupId },
      include: { users: true, messages: { orderBy: { createdAt: 'desc' } } },
    });
    if (!group)
      return Promise.reject({
        message: `A group with id=${groupId} does not exist`,
      });
    let groupUser = false;
    for (const u of group.users)
      if (u.id === user.id) {
        groupUser = true;
        break;
      }
    if (!groupUser)
      return Promise.reject({
        message: `User ${user.username} is not a part of group ${group.title}`,
      });
    const message = await this.prisma.message.create({
      data: {
        contents: contents,
        user: { connect: { id: user.id } },
        group: { connect: { id: group.id } },
      },
    });
    return message;
  }

  async joinGroup(inviteString: string, user: User) {
    console.log(user);
    try {
      const userNew = await this.prisma.user.update({
        where: { id: user.id },
        data: { groups: { connect: { inviteString: inviteString } } },
        include: { _count: true },
      });
      return userNew;
    } catch {
      return Promise.reject({
        message:
          'A group with this invite string does not exist. Please make sure you have entered it correctly.',
      });
    }
  }
}
