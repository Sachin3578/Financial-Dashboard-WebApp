import { Request, Response } from "express";
import { Transaction } from "../../models/transactions";

export const getStats = async (req: Request, res: Response) => {
  try {
    const transactions = await Transaction.find();

    let revenue = 0;
    let expenses = 0;

    for (const txn of transactions) {
      if (txn.category.toLowerCase() === "revenue") {
        revenue += txn.amount;
      } else {
        expenses += txn.amount;
      }
    }

    const balance = revenue - expenses;
    const savings = revenue * 0.1;

    res.json({
      balance,
      revenue,
      expenses,
      savings,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to calculate stats", error: err });
  }
};
