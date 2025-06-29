import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../../models/users";

const JWT_SECRET = process.env.JWT_SECRET || "defaultsecret";

export const register = async (req: Request, res: Response) => {
  const { user_id, name } = req.body;

  const existingUser = await User.findOne({ user_id });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = new User({ user_id, name });
  await user.save();

  res.status(201).json({ message: "User registered" });
};

export const login = async (req: Request, res: Response) => {
  const { user_id } = req.body;

  const user = await User.findOne({ user_id });
  if (!user) {
    return res.status(401).json({ message: "Invalid user_id" });
  }

  const token = jwt.sign({ user_id: user.user_id, name: user.name }, JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
};
