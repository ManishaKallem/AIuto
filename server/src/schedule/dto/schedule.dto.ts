import { ApiProperty } from '@nestjs/swagger';
import { RepeatEach } from '@prisma/client';
import { IsDateString, IsEnum } from 'class-validator';

export class CreateScheduleDto {
  title!: string;

  note?: string;

  @IsDateString()
  startTime!: Date;

  @IsDateString()
  endTime!: Date;

  @ApiProperty({ enum: RepeatEach })
  @IsEnum(RepeatEach)
  repeatEach?: RepeatEach;
}
