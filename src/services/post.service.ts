import { IPost } from "../types/post";
import { PrismaClient } from "@prisma/client";
import { IUser } from "../types/user";

const prisma = new PrismaClient();

export const getAllPosts = async () => {
  // const arr: IPost[] = [
  //   {
  //     Id: 1,
  //     Author_id: 1,
  //     Author_name: "Andrey",
  //     Text: "<span>Test 1</span>",
  //     LikeCounter: 0,
  //   },
  //   {
  //     Id: 2,
  //     Author_id: 2,
  //     Author_name: "Ssssss",
  //     Text: "<span>Test 2</span>",
  //     LikeCounter: 0,
  //   },
  //   {
  //     Id: 3,
  //     Author_id: 3,
  //     Author_name: "Ddddddd",
  //     Text: "<span>Test 3</span>",
  //     LikeCounter: 0,
  //   },
  // ];
  // return arr;

  return prisma.post.findMany();
};

export const getPostById = async (id: number): Promise<IPost | null> => {
  return prisma.post.findFirst({
    where: {
      Id: id,
    },
  });
};

export const createPost = async (user: IUser, text: string) => {
  return prisma.post.create({
    data: {
      Author_id: user.Id,
      Author_name: user.Login,
      Text: text,
      LikeCounter: 0,
    },
  });
};

export const deletePostById = async (id: number) => {
  return prisma.post.delete({
    where: {
      Id: id,
    },
  });
};

export const updatePostById = async (id: number, text: string) => {
  return prisma.post.update({
    where: {
      Id: id,
    },
    data: {
      Text: text,
    },
  });
};
