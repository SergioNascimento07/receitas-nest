-- CreateEnum
CREATE TYPE "Difficulties" AS ENUM ('easy', 'medium', 'hard');

-- CreateEnum
CREATE TYPE "rates" AS ENUM ('muito_ruim', 'ruim', 'medio', 'bom', 'muito_bom');

-- CreateTable
CREATE TABLE "ingredients" (
    "name" VARCHAR(130) NOT NULL,
    "id" TEXT NOT NULL,

    CONSTRAINT "ingredients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "recipe_steps" (
    "id" TEXT NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "step_number" INTEGER NOT NULL,
    "revenue_id" TEXT NOT NULL,

    CONSTRAINT "recipe_steps_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "revenues" (
    "name" VARCHAR(200) NOT NULL,
    "id" TEXT NOT NULL,
    "average_time" TIME(6) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "difficulty" "Difficulties" NOT NULL,
    "id_user" TEXT NOT NULL,
    "image" TEXT,
    "revenue_type" TEXT NOT NULL,
    "visualizations_quantity" BIGINT NOT NULL DEFAULT 0,

    CONSTRAINT "revenues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "revenues_igredients" (
    "revenue_id" TEXT NOT NULL,
    "ingredient_id" TEXT NOT NULL,
    "amount" VARCHAR(70) NOT NULL,

    CONSTRAINT "revenues_igredients_pkey" PRIMARY KEY ("ingredient_id","revenue_id")
);

-- CreateTable
CREATE TABLE "revenues_ratings" (
    "id" TEXT NOT NULL,
    "revenue_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "rating" "rates" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "revenues_ratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "revenues_types" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(150) NOT NULL,

    CONSTRAINT "revenues_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "date_of_birth" DATE NOT NULL,
    "password" VARCHAR(25) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "recipe_steps_step_number_revenue_id_key" ON "recipe_steps"("step_number", "revenue_id");

-- CreateIndex
CREATE UNIQUE INDEX "revenues_types_name_key" ON "revenues_types"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "recipe_steps" ADD CONSTRAINT "recipe_steps_revenue_id_fkey" FOREIGN KEY ("revenue_id") REFERENCES "revenues"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "revenues" ADD CONSTRAINT "revenues_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "revenues" ADD CONSTRAINT "revenues_revenue_type_fkey" FOREIGN KEY ("revenue_type") REFERENCES "revenues_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "revenues_igredients" ADD CONSTRAINT "revenues_igredients_ingredient_id_fkey" FOREIGN KEY ("ingredient_id") REFERENCES "ingredients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "revenues_igredients" ADD CONSTRAINT "revenues_igredients_revenue_id_fkey" FOREIGN KEY ("revenue_id") REFERENCES "revenues"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "revenues_ratings" ADD CONSTRAINT "revenues_ratings_revenue_id_fkey" FOREIGN KEY ("revenue_id") REFERENCES "revenues"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "revenues_ratings" ADD CONSTRAINT "revenues_ratings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
