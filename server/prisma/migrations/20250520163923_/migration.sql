/*
  Warnings:

  - You are about to alter the column `content` on the `blogposts` table. The data in that column could be lost. The data in that column will be cast from `VarChar(5000)` to `VarChar(3500)`.

*/
-- AlterTable
ALTER TABLE "blogposts" ALTER COLUMN "content" SET DATA TYPE VARCHAR(3500);
