import {
  Body,
  Controller,
  Get,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { AuthService } from './auth.service';
import { CurrentUser } from './current-user.decorator';
import { LoginUserInput } from './dto/login-user.input';
import { ApiAuthGuard } from './guards/api-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
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
