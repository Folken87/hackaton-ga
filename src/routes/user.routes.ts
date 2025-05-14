import { Router } from "express";
import * as UserController from '../controllers/user.controller';
const router = Router();

router.post("/ban", UserController.ban);

export default router;
