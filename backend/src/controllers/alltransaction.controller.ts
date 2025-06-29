import { Request, Response } from "express";
import { Transaction, ITransaction } from "../../models/transactions";
import { User, IUser } from "../../models/users";

interface EnrichedTransaction extends ITransaction {
  user_name: string;
}

export const getallTransactions = async (req: Request, res: Response) => {
  try {
    const transactions: ITransaction[] = await Transaction.find().sort({ date: -1 });
    const users: IUser[] = await User.find();

    const enriched: EnrichedTransaction[] = transactions.map((txn) => {
      const user = users.find((u) => u.user_id === txn.user_id);
      return {
        ...txn.toObject(),
        user_name: user?.name || "Unknown"
      };
    });

    res.json(enriched);
  } catch (err) {
    res.status(500).json({ message: "Error fetching transactions", error: err });
  }
};
