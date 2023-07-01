/*
  Warnings:

  - You are about to drop the column `uploadId` on the `Like` table. All the data in the column will be lost.
  - You are about to drop the `Upload` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_uploadId_fkey";

-- DropForeignKey
ALTER TABLE "Upload" DROP CONSTRAINT "Upload_userId_fkey";

-- AlterTable
ALTER TABLE "Like" DROP COLUMN "uploadId";

-- DropTable
DROP TABLE "Upload";
