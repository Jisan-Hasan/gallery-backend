/*
  Warnings:

  - You are about to drop the column `srt` on the `Images` table. All the data in the column will be lost.
  - Added the required column `src` to the `Images` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Images" DROP COLUMN "srt",
ADD COLUMN     "src" TEXT NOT NULL;
