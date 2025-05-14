import { Router } from "express";
import { authenticate, authorize } from "../middlewares/auth.middleware";

import * as PostController from "../controllers/post.controller";
import { Role } from "../types/role";

const router = Router();

router.get(
  "/getAll",
  PostController.getAll
);
router.post(
  "/create",
  authenticate,
  authorize([Role.USER, Role.ADMIN]),
  PostController.create
);

router.post(
  "/delete",
  authenticate,
  authorize([Role.USER, Role.ADMIN]),
  PostController.deletePost
);
router.post(
  "/update",
  authenticate,
  authorize([Role.USER, Role.ADMIN]),
  PostController.updatePost
);

export default router;
