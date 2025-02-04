/*
  Warnings:

  - A unique constraint covering the columns `[ingredientId]` on the table `recipes` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "ingredients" ADD COLUMN     "recipeId" TEXT;

-- AlterTable
ALTER TABLE "recipes" ADD COLUMN     "ingredientId" TEXT;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "emailVerified" TIMESTAMP(3);

-- CreateIndex
CREATE UNIQUE INDEX "recipes_ingredientId_key" ON "recipes"("ingredientId");

-- AddForeignKey
ALTER TABLE "recipes" ADD CONSTRAINT "recipes_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "ingredients"("id") ON DELETE SET NULL ON UPDATE CASCADE;
