import { Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';

@Injectable()
export class PasswordsService {
  async getPasswordDigest(password: string) {
    return await argon2.hash(password, { memoryCost: 2 ** 16 });
  }

  async checkPassword(password: string, passwordDigest: string) {
    return await argon2.verify(passwordDigest, password);
  }
}
