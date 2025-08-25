/*
  Warnings:

  - Made the column `menuDescription` on table `Menus` required. This step will fail if there are existing NULL values in that column.
  - Made the column `menuImage` on table `Menus` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Menus" ALTER COLUMN "menuDescription" SET NOT NULL,
ALTER COLUMN "menuImage" SET NOT NULL;
