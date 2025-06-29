import { Router } from "express";
import { getallTransactions } from "../controllers/alltransaction.controller";

const alltransactionRouter = Router();
alltransactionRouter.get("/", getallTransactions);
export default alltransactionRouter;
