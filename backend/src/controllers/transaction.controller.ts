import { Request, Response } from "express";
import { Transaction } from "../../models/transactions";

export const getAllTransactions = async (req: Request, res: Response) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 }).limit(3); // latest 10
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ message: "Error fetching transactions", error: err });
  }
};
