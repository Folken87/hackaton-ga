import { Router } from "express";
import postRoutes from "./post.routes";
import authRoutes from "./auth.routes"
const router = Router();

router.use("/post", postRoutes);
router.use("/auth", authRoutes);

export default router;
