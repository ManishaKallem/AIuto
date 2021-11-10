import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { JournalModule } from './journal/journal.module';
import { NavigatorModule } from './navigator/navigator.module';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        JWT_SECRET: Joi.string().required(),
        DATABASE_URL: Joi.string().required(),
      }),
    }),
    AuthModule,
    UserModule,
    JournalModule,
    NavigatorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
