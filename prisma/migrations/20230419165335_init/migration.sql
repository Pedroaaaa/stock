/*
  Warnings:

  - Made the column `stockId` on table `items` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `items` DROP FOREIGN KEY `items_stockId_fkey`;

-- AlterTable
ALTER TABLE `items` MODIFY `stockId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `items` ADD CONSTRAINT `items_stockId_fkey` FOREIGN KEY (`stockId`) REFERENCES `stocks`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
