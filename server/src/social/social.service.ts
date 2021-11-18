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

  async setInviteString(id: string, user: User) {
    const group = await this.prisma.group.findUnique({ where: { id: id } });
    if (group.userId === user.id) {
      while (true) {
        const inviteString = crypto.randomBytes(5).toString('hex');
        this.logger.debug(`Generated inviteString='${inviteString}'`);
        try {
          const newGroup = await this.prisma.group.update({
            where: { id: id },
            data: { inviteString: inviteString },
          });
          return { inviteString: newGroup.inviteString };
        } catch {
          this.logger.error(
            `The generated inviteString='${inviteString}' already exists, attempting to create another...`,
          );
        }
      }
    }
    return Promise.reject({
      message: 'You are not the admin of this group',
    });
  }

  async joinGroup(inviteString: string, user: User) {
    console.log(user);
    const userNew = await this.prisma.user.update({
      where: { id: user.id },
      data: { groups: { connect: { inviteString: inviteString } } },
      include: { _count: true },
    });
    return userNew;
  }
}
