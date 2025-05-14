import { Router } from "express";
import * as PostController from "../controllers/post.controller";
const router = Router();

router.get("/getAll", PostController.getAll);

export default router;
