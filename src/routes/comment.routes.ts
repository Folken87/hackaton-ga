import { Router } from "express";
import { authenticate, authorize } from "../middlewares/auth.middleware";
import * as CommentController from "../controllers/comment.controller";
import { Role } from "../types/role";
const router = Router();

router.post(
  "/create",
  authenticate,
  authorize([Role.USER, Role.ADMIN]),
  CommentController.create
);
router.post("/getByPostId", CommentController.getByPostId);

export default router;
