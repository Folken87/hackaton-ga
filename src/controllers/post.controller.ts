import { Request, Response } from "express";
import * as UserService from "../services/user.service";
import * as PostService from "../services/post.service";
import { IUser } from "../types/user";
import { Role } from "../types/role";

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

export const deletePost = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      throw new Error("User not authenticated");
    }
    const { post_id } = req.body;
    const user = await UserService.getUserById(req.user.userId);
    if (!user) {
      throw new Error("User not found");
    }
    const post = await PostService.getPostById(post_id);
    if (!post) {
      throw new Error("Post not found");
    }

    //проверка на доступность пользователю
    if (post.Author_id !== user.Id && user.Role_id !== Role.ADMIN) {
      throw new Error("Нет доступа");
    }
    await PostService.deletePostById(post_id);
    res.status(200).json();
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      throw new Error("User not authenticated");
    }
    const { post_id, text } = req.body;
    const user = await UserService.getUserById(req.user.userId);
    if (!user) {
      throw new Error("User not found");
    }
    const post = await PostService.getPostById(post_id);
    if (!post) {
      throw new Error("Post not found");
    }

    //проверка на доступность пользователю
    if (post.Author_id !== user.Id && user.Role_id !== Role.ADMIN) {
      throw new Error("Нет доступа");
    }
    await PostService.updatePostById(post_id, text);
    res.status(200).json();
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
