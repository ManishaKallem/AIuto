import { PartialType } from '@nestjs/swagger';
import { CreateNavigatorDto } from './create-navigator.dto';

export class UpdateNavigatorDto extends PartialType(CreateNavigatorDto) {}
