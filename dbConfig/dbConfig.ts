import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL!, {
      dbName: process.env.MONGO_DB,
    });
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
}
