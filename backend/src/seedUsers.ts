import mongoose from "mongoose";
import dotenv from "dotenv";
import { User } from "../models/users";
import path = require("path");
import fs from "fs";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI as string;

const seedUsers = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");

     const filePath = path.join(__dirname, "../data/user.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const users = JSON.parse(fileContent);

    await User.deleteMany({});
    console.log(" Existing users cleared");

    await User.insertMany(users);
    console.log(" New users inserted");

    process.exit(0);
  } catch (err) {
    console.error(" Seeding failed:", err);
    process.exit(1);
  }
};

seedUsers();
