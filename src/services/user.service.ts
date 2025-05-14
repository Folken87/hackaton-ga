import { PrismaClient } from "@prisma/client";
import { IUser } from "../types/user";

const prisma = new PrismaClient();

export const getUserById = async (id: number): Promise<IUser | null> => {
  return prisma.user.findFirst({
    where: {
      Id: id,
    },
  });
};

export const banUserById = async (id: number): Promise<IUser | null> => {
  return prisma.user.update({
    where: {
      Id: id,
    },
    data: {
      Is_banned: true,
    },
  });
};
