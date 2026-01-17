import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  console.log(process.env.MONGODB_URI);
  try {
    await mongoose.connect(process.env.MONGODB_URI).then((res) => {
      console.log("Connected");
    });
  } catch (error) {
    console.log("Error");
  }
};

export default connectDB;
