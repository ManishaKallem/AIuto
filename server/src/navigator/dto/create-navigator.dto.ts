import { ApiProperty } from '@nestjs/swagger';
import { Mood } from '@prisma/client';
import { IsDateString, IsEnum } from 'class-validator';

export class CreateNavigatorDto {
  /**
   * The date of which day we want to set the mood of
   */
  @IsDateString()
  on!: Date;

  /**
   * The mood that the user is feeling on that date
   */
  @ApiProperty({ enum: Mood })
  @IsEnum(Mood)
  mood!: Mood;
}
