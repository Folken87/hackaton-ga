import { IUser } from "../types/user";
import { IComment } from "./../types/comment";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createComment = async (
  post_id: number,
  text: string,
  user: IUser
): Promise<IComment | null> => {
  return prisma.comment.create({
    data: {
      Post_id: post_id,
      Text: text,
      Author_id: user.Id,
    },
  });
};

export const getCommentsByPost = async (
  post_id: number
): Promise<IComment[] | null> => {
  return prisma.comment.findMany({
    where: {
      Post_id: post_id,
    },
  });
};
