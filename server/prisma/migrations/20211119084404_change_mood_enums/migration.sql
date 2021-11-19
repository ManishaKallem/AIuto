/*
  Warnings:

  - The values [ORDINARY,DISTRESSED] on the enum `Mood` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Mood_new" AS ENUM ('HAPPY', 'ANGRY', 'ECSTATIC', 'GLOOMY', 'TIRED', 'SAD');
ALTER TABLE "MoodEntry" ALTER COLUMN "mood" DROP DEFAULT;
ALTER TABLE "MoodEntry" ALTER COLUMN "mood" TYPE "Mood_new" USING ("mood"::text::"Mood_new");
ALTER TYPE "Mood" RENAME TO "Mood_old";
ALTER TYPE "Mood_new" RENAME TO "Mood";
DROP TYPE "Mood_old";
ALTER TABLE "MoodEntry" ALTER COLUMN "mood" SET DEFAULT 'HAPPY';
COMMIT;

-- AlterTable
ALTER TABLE "MoodEntry" ALTER COLUMN "mood" SET DEFAULT E'HAPPY';
