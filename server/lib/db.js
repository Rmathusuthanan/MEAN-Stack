import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    console.log("Mongo URI:", process.env.MONGODB_URI);

    await mongoose.connect(process.env.MONGODB_URI); // no extra options needed

    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:");
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
