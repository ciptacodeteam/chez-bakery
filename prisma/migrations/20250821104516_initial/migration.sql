-- CreateTable
CREATE TABLE "public"."Categories" (
    "id" TEXT NOT NULL,
    "categoryName" TEXT NOT NULL,
    "categoryImage" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" TEXT,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Menus" (
    "id" TEXT NOT NULL,
    "menuName" TEXT NOT NULL,
    "menuDescription" TEXT,
    "price" INTEGER NOT NULL,
    "menuImage" TEXT,
    "isFavourite" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3),
    "updatedBy" TEXT,

    CONSTRAINT "Menus_pkey" PRIMARY KEY ("id")
);
