import { Router } from "express";
import { getMonthlyStats, getYearlyStats  } from "../controllers/chart.controller";

const chartRouter = Router();

chartRouter.get("/", getMonthlyStats);
chartRouter.get("/yearly", getYearlyStats);

export default chartRouter;