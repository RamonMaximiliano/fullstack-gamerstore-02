/*
  Warnings:

  - You are about to alter the column `discount` on the `Purchase` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(8,2)`.
  - You are about to alter the column `subtotal` on the `Purchase` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(8,2)`.
  - You are about to alter the column `total` on the `Purchase` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(8,2)`.

*/
-- AlterTable
ALTER TABLE "Purchase" ALTER COLUMN "discount" DROP DEFAULT,
ALTER COLUMN "discount" SET DATA TYPE DECIMAL(8,2),
ALTER COLUMN "subtotal" DROP DEFAULT,
ALTER COLUMN "subtotal" SET DATA TYPE DECIMAL(8,2),
ALTER COLUMN "total" DROP DEFAULT,
ALTER COLUMN "total" SET DATA TYPE DECIMAL(8,2);
