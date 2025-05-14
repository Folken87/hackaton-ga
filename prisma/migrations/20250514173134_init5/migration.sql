/*
  Warnings:

  - Added the required column `Is_banned` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Login" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Role_id" INTEGER NOT NULL,
    "Is_banned" BOOLEAN NOT NULL
);
INSERT INTO "new_User" ("Id", "Login", "Password", "Role_id") SELECT "Id", "Login", "Password", "Role_id" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_Login_key" ON "User"("Login");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
