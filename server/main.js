import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import authRoutes from "./routes/auth.route.js";
import connectDB from "./lib/db.js";
import { verifyToken } from "./middleware/auth.middleware.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

app.use("/api/auth/", authRoutes);
app.get("/api/protected", verifyToken, (req, res) => {
  res.json({ message: "Protected route", user: req.user });
});

connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});
