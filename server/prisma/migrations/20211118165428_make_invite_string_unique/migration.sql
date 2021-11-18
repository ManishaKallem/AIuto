/*
  Warnings:

  - A unique constraint covering the columns `[inviteString]` on the table `Group` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Group" ALTER COLUMN "inviteString" SET DATA TYPE CHAR(10);

-- CreateIndex
CREATE UNIQUE INDEX "Group_inviteString_key" ON "Group"("inviteString");
