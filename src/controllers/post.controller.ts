import { Request, Response } from "express";
import * as UserService from "../services/user.service";
import * as PostService from "../services/post.service";
import { IUser } from "../types/user";

export const getAll = async (req: Request, res: Response) => {
  try {
    const data = await PostService.getAllPosts();
    res.status(200).json(data);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      throw new Error("User not authenticated");
    }
    const { text } = req.body;
    const user = await UserService.getUserById(req.user.userId);
    if (!user) {
      throw new Error("User not found");
    }
    const newPost = await PostService.createPost(user, text);
    res.status(200).json(newPost);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
