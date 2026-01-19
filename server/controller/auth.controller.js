import dotenv from "dotenv";
dotenv.config();

import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//REGISTER
export const register = async (req, res) => {
  console.log("Register", req.body);
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// LOGIN User
export const login = async (req, res) => {
  console.log("Login", req.body);
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    console.log("User", user);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    console.log("Password", password);
    console.log("User Password", user.password);

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Is Match", isMatch);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    console.log(process.env.JWT_SECRET);

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
