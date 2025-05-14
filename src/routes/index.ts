import { Router } from "express";
import postRoutes from "./post.routes";
import authRoutes from "./auth.routes"
import commentRoutes from "./comment.routes"
import userRoutes from "./user.routes"
const router = Router();

router.use("/post", postRoutes);
router.use("/auth", authRoutes);
router.use("/comments", commentRoutes);
router.use("/user", userRoutes);

export default router;
