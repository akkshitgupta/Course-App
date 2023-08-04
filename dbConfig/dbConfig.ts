import mongoose from "mongoose";

let isConnected = false;

export async function connectDB() {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Using existing database connection");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URL!, {
      dbName: process.env.MONGO_DB,
    });
    isConnected = true;

    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
}
