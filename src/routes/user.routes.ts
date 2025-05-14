import { Router } from "express";
import * as UserController from "../controllers/user.controller";
import { authenticate, authorize } from "../middlewares/auth.middleware";
import { Role } from "../types/role";
const router = Router();

router.post(
  "/ban",
  authenticate,
  authorize([Role.ADMIN]),
  UserController.ban
);

export default router;
