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
  authorize([Role.ADMIN]),
  PostController.getAll
);

export default router;
