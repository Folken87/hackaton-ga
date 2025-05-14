import { Request, Response } from "express";
import * as UserService from "../services/user.service";
import * as AuthService from "../services/auth.service";

export const ban = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      throw new Error("User not authenticated");
    }
    const myUser = await UserService.getUserById(req.user.userId);
    if (!myUser) {
      throw new Error("MyUser not found");
    }
    const { user_id } = req.body;
    const findUser = await UserService.getUserById(user_id);
    if (!findUser) {
      throw new Error("User not found");
    }
    const findUserUpdated = await UserService.banUserById(findUser.Id);
    res.status(201).json(findUserUpdated);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
