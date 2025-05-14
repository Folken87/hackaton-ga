import { Request, Response } from "express";

export const getAll = async (req: Request, res: Response) => {
  try {
    res.status(200).json();
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
