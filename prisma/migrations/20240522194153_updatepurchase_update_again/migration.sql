-- AlterTable
ALTER TABLE "Purchase" ALTER COLUMN "discount" DROP NOT NULL,
ALTER COLUMN "discount" SET DATA TYPE TEXT,
ALTER COLUMN "subtotal" DROP NOT NULL,
ALTER COLUMN "subtotal" SET DATA TYPE TEXT,
ALTER COLUMN "total" DROP NOT NULL,
ALTER COLUMN "total" SET DATA TYPE TEXT;
