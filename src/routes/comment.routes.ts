import { Router } from "express";
import * as CommentController from '../controllers/comment.controller';
const router = Router();

router.post("/create", CommentController.create);
router.post("/getByPostId", CommentController.getByPostId);

export default router;
