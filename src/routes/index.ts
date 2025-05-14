import { Router } from "express";
import postRoutes from "./post.routes";
import authRoutes from "./auth.routes"
import commentRoutes from "./comment.routes"
const router = Router();

router.use("/post", postRoutes);
router.use("/auth", authRoutes);
router.use("/comments", commentRoutes);

export default router;
