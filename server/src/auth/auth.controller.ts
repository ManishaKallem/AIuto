import {
  Body,
  Controller,
  Get,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CurrentUser } from './current-user.decorator';
import { LoginUserInput } from './dto/login-user.input';
import { ApiAuthGuard } from './guards/api-auth.guard';
import { User } from '@prisma/client';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('login')
  async loginUser(@Body() loginUserInput: LoginUserInput) {
    const res = await this.authService.validateUserByPassword(loginUserInput);
    if (res) return res;
    throw new UnauthorizedException('Incorrect credentials provided');
  }

  @UseGuards(ApiAuthGuard)
  @Get('refresh-token')
  async refreshToken(@CurrentUser() user: User) {
    const maybeToken = this.authService.createJwt(user);
    if (!maybeToken)
      throw new UnauthorizedException('Incorrect credentials provided');
    return {
      token: maybeToken,
    };
  }
}
