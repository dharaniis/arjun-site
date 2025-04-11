-- CreateTable
CREATE TABLE "blogposts" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(60) NOT NULL,
    "content" VARCHAR(5000) NOT NULL,
    "duration" INTEGER NOT NULL,
    "date" VARCHAR(35) NOT NULL,

    CONSTRAINT "blogposts_pkey" PRIMARY KEY ("id")
);

