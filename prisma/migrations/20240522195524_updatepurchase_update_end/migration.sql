/*
  Warnings:

  - Added the required column `discount` to the `Purchase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subtotal` to the `Purchase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `Purchase` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Purchase" DROP COLUMN "discount",
ADD COLUMN     "discount" DECIMAL(8,2) NOT NULL,
DROP COLUMN "subtotal",
ADD COLUMN     "subtotal" DECIMAL(8,2) NOT NULL,
DROP COLUMN "total",
ADD COLUMN     "total" DECIMAL(8,2) NOT NULL;
