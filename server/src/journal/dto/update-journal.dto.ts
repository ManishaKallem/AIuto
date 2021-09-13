import { PartialType } from '@nestjs/mapped-types';
import { CreateJournalDto } from './create-journal.dto';

export class UpdateJournalDto extends PartialType(CreateJournalDto) {}
