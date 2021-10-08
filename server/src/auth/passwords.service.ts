import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as argon2 from 'argon2';

@Injectable()
export class PasswordsService {
  constructor(private readonly configService: ConfigService) {}

  async getPasswordDigest(password: string) {
    const passwordDigest = await argon2.hash(password, {
      memoryCost: 2 ** this.configService.get('PASSWORD_HASH_MEMORY_COST'),
    });
    return passwordDigest;
  }

  async checkPassword(password: string, passwordDigest: string) {
    return await argon2.verify(passwordDigest, password);
  }
}
