import { Router } from "express";
import { getAllTransactions } from "../controllers/transaction.controller";

const transactionRouter = Router();
transactionRouter.get("/", getAllTransactions);
export default transactionRouter;
