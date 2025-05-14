import { Request, Response } from "express";
import * as PostService from "../services/post.service";

export const getAll = async (req: Request, res: Response) => {
  try {
    const data = await PostService.getAllPosts();
    res.status(200).json(data);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
