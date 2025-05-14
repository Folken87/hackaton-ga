/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - Added the required column `Id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Login` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Password` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Role_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Post" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Author_id" INTEGER NOT NULL,
    "Author_name" TEXT NOT NULL,
    "Text" TEXT NOT NULL,
    "LikeCounter" INTEGER NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Login" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Role_id" INTEGER NOT NULL
);
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_Login_key" ON "User"("Login");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
