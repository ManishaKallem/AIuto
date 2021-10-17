import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Mood } from '@prisma/client';
import { IsDateString, IsEnum } from 'class-validator';

/**
 * The DTO that is used to create a new navigator object.
 */
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

/**
 * The DTO that is used to update an existing navigator object.
 */
export class UpdateNavigatorDto extends PartialType(CreateNavigatorDto) {}
