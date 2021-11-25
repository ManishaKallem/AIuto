import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { existsSync } from 'fs';
import * as Joi from 'joi';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { JournalModule } from './journal/journal.module';
import { NavigatorModule } from './navigator/navigator.module';
import { ScheduleModule as ScheduleModuleApp } from './schedule/schedule.module';
import { PredictionModule } from './prediction/prediction.module';
import { SocialModule } from './social/social.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
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
    CoreModule,
    ScheduleModuleApp,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
