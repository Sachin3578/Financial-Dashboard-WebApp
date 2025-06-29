import { Request, Response } from "express";
import { Transaction } from "../../models/transactions";

export const getMonthlyStats = async (req: Request, res: Response) => {
  const { year, month } = req.query;

  if (!year || !month) {
    return res.status(400).json({ message: "Year and month are required" });
  }

  try {
    const transactions = await Transaction.find({
      date: { $regex: `${year}-${String(new Date(`${month} 1`).getMonth() + 1).padStart(2, "0")}` },
    });

    const income: number[] = [0, 0, 0];
    const expense: number[] = [0, 0, 0];

    transactions.forEach((txn) => {
      const week = new Date(txn.date).getDate() <= 10 ? 0 : new Date(txn.date).getDate() <= 20 ? 1 : 2;
      if (txn.category.toLowerCase() === "revenue") income[week] += txn.amount;
      else expense[week] += txn.amount;
    });

    res.json({ income, expense });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch chart data", error });
  }
};

export const getYearlyStats = async (req: Request, res: Response) => {
  const { year } = req.query;

  if (!year) {
    return res.status(400).json({ message: "Year is required" });
  }

  try {
    const transactions = await Transaction.find({
      date: { $regex: `^${year}` },
    });

    const income: number[] = new Array(12).fill(0);
    const expense: number[] = new Array(12).fill(0);

    transactions.forEach((txn) => {
      const txnDate = new Date(txn.date);
      const monthIndex = txnDate.getMonth(); // 0 for Jan, 11 for Dec

      if (txn.category.toLowerCase() === "revenue") {
        income[monthIndex] += txn.amount;
      } else {
        expense[monthIndex] += txn.amount;
      }
    });

    res.json({ income, expense });
  } catch (err) {
    res.status(500).json({ message: "Failed to get yearly data", error: err });
  }
};
