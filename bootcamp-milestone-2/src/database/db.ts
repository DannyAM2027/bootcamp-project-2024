import mongoose from "mongoose";

const url: string = process.env.MONGO_URI as string;

if (!url) {
  throw new Error("MongoDB connection string is not defined in .env file.");
}

let isConnected = false; // Track the connection state

/**
 * Establishes a connection to the MongoDB database. Reuses the existing connection if available.
 * Call this function at the start of API routes and data fetches.
 * @returns {Promise<typeof mongoose>}
 */
const connectDB = async () => {
  if (isConnected) {
    console.log("Using existing MongoDB connection.");
    return mongoose;
  }

  try {
    const connection = await mongoose.connect(url);
    isConnected = true;
    console.log("MongoDB connected successfully.");
    return connection;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

export default connectDB;
