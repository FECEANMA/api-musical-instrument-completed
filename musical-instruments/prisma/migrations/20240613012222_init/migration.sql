-- CreateTable
CREATE TABLE "InstrumentMusical" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "type" TEXT NOT NULL,
    "fabricante" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "image" TEXT,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "InstrumentMusical_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "InstrumentMusical_name_key" ON "InstrumentMusical"("name");
