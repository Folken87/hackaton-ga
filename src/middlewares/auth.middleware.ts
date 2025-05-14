// src/middlewares/auth.middleware.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { Role } from "../types/role";

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.cookies?.token;
  if (!token) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as jwt.JwtPayload & { userId: number; role: number };
    req.user = decoded;
    next(); // Вызываем next() без return
  } catch (error) {
    res.status(401).json({ error: "Invalid or expired token" });
    return; // Просто return вместо return res.status()
  }
};

export const authorize = (allowedRoles: Role[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      res.status(403).json({ error: "Нет доступа" });
      return;
    }
    next();
  };
};
