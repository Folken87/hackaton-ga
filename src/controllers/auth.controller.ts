import { Request, Response } from "express";
import * as AuthService from "../services/auth.service";

export const register = async (req: Request, res: Response) => {
  try {
    const { login, password } = req.body;
    const user = await AuthService.registerUser(login, password);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { login, password } = req.body;
    const result = await AuthService.loginUser(login, password);
    res.cookie("token", result.token, {
      httpOnly: true, // Недоступен для JavaScript
      secure: process.env.NODE_ENV === "production", // Только HTTPS
      sameSite: "strict", // Защита от CSRF
      maxAge: 60 * 60 * 1000, //3600000, // Время жизни (1 час)
      path: "/",
    });
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
    });
    res.status(200).json({});
  } catch (error: any) {
    res.status(401).json({ error: error.message });
  }
};
