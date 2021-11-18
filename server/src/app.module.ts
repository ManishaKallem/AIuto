import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { JournalModule } from './journal/journal.module';
import { NavigatorModule } from './navigator/navigator.module';
import { PredictionModule } from './prediction/prediction.module';
import * as Joi from 'joi';
import { existsSync } from 'fs';
import { ScheduleModule } from './schedule/schedule.module';
import { SocialModule } from './social/social.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        JWT_SECRET: Joi.string().required(),
        DATABASE_URL: Joi.string().required(),
        GOOGLE_APPLICATION_CREDENTIALS: Joi.string()
          .required()
          .custom((value) => {
            if (!existsSync(value))
              throw new Error(`path '${value}' does not exist`);
            return value;
          }),
      }),
    }),
    AuthModule,
    UserModule,
    JournalModule,
    NavigatorModule,
    PredictionModule,
    ScheduleModule,
    SocialModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
