import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async (retries = 10, delayMs = 5000) => {
  const uri = process.env.MONGODB_URI || "mongodb://mongo:27017/mean-app";

  try {
    console.log("Connecting to MongoDB URI:", uri);
    // Some older connection strings include unsupported query params
    // (usenewurlparser / useunifiedtopology). Strip them if present.
    let connectUri = uri;
    const parts = uri.split("?");
    if (parts.length > 1) {
      const base = parts[0];
      const params = new URLSearchParams(parts[1]);
      // remove known unsupported options (case-insensitive)
      [
        "usenewurlparser",
        "useunifiedtopology",
        "useNewUrlParser",
        "useUnifiedTopology",
      ].forEach((p) => params.delete(p));
      connectUri = base + (params.toString() ? `?${params.toString()}` : "");
    }
    await mongoose.connect(connectUri, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    if (retries <= 0) {
      console.error("MongoDB connection failed after retries:", error);
      throw error;
    }

    console.warn(
      `MongoDB connect failed, retrying in ${delayMs}ms... (${retries} retries left)`,
    );
    await new Promise((resolve) => setTimeout(resolve, delayMs));
    return connectDB(retries - 1, delayMs);
  }
};

export default connectDB;
