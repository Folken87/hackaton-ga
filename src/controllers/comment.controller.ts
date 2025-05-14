import { Request, Response } from "express";
import * as CommentService from "../services/comment.service";
import * as PostService from "../services/post.service";
import * as UserService from "../services/user.service";

export const create = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      throw new Error("User not authenticated");
    }
    const user = await UserService.getUserById(req.user.userId);
    if (!user) {
      throw new Error("User not found");
    }
    const { post_id, text } = req.body;
    const post = await PostService.getPostById(post_id);
    if (!post) {
      throw new Error("Post not found");
    }
    const data = await CommentService.createComment(post_id, text, user);
    res.status(201).json(data);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getByPostId = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      throw new Error("User not authenticated");
    }
    const user = await UserService.getUserById(req.user.userId);
    if (!user) {
      throw new Error("User not found");
    }
    const { post_id } = req.body;
    const post = await PostService.getPostById(post_id);
    if (!post) {
      throw new Error("Post not found");
    }
    const data = await CommentService.getCommentsByPost(post_id);
    res.status(201).json(data);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
