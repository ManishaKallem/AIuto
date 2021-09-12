/*
 Warnings:
 
 - You are about to drop the column `remindEvery` on the `Schedule` table. All the data in the column will be lost.
 
 */
-- AlterTable
ALTER TABLE "Schedule"
  RENAME COLUMN "remindEvery" TO "remindBefore";
