import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { Transaction } from "../models/transactions";

dotenv.config();

const Transactions = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log(" Connected to MongoDB Atlas");

    const filePath = path.join(__dirname, "../data/transaction.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const transactions = JSON.parse(fileContent);

    // Optional: Clear old entries
    await Transaction.deleteMany();

    await Transaction.insertMany(transactions);
    console.log(" Inserted transactions from JSON file");

    process.exit(0);
  } catch (error) {
    console.error(" Seeding failed:", error);
    process.exit(1);
  }
};

Transactions();
