-- CreateTable
CREATE TABLE "Purchase" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "purchase" JSONB NOT NULL,

    CONSTRAINT "Purchase_pkey" PRIMARY KEY ("id")
);
