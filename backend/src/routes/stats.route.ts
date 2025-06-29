import { Router } from "express";
import { getStats } from "../controllers/stats.controller";
import { authenticateJWT } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", authenticateJWT, getStats);

export default router;
