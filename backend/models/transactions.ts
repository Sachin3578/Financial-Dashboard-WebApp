import { Schema, model, Document } from "mongoose";

export interface ITransaction extends Document {
  id: number;
  date: string;
  amount: number;
  category: string;
  status: "Paid" | "Unpaid" | "Pending";
  user_id: string;
  user_profile: string;
}

const transactionSchema = new Schema<ITransaction>({
  id: { type: Number, required: true },
  date: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  status: { type: String, enum: ["Paid", "Unpaid", "Pending"], required: true },
  user_id: { type: String, required: true },
  user_profile: { type: String, required: true },
});

export const Transaction = model<ITransaction>("Transaction", transactionSchema);
