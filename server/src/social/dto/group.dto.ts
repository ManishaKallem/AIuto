import { PartialType } from '@nestjs/mapped-types';

export class GroupDto {
  title!: string;

  description?: string;
}

/**
 * The DTO used to update an existing journal in the database.
 */
export class UpdateGroupDto extends PartialType(GroupDto) {}
