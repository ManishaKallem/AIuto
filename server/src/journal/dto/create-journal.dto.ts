/*
The DTO used to create a journal in the database.
 */
export class CreateJournalDto {
  /*
  The title of the journal entry
  @example 'Take the dog for a walk'
   */
  title: string;

  /*
  A brief description of the journal entry
  @example 'While out on a walk, buy some dog food and a bouncy ball.'
   */
  description?: string;

  /*
  If set to true, this journal record would be set as completed.
   */
  completed?: boolean;
}
