import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import statsRouter from "../src/routes/stats.route"
import chartRouter from "../src/routes/chart.route";
import transactionRouter from "./routes/transaction.route";
import alltransactionRouter from "./routes/allTransaction.route";

dotenv.config();
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => console.log(" MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/stats", statsRouter);
app.use("/api/chart", chartRouter);
app.use("/api/transactions", transactionRouter);
app.use("/api/alltransactions", alltransactionRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Server running with TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
