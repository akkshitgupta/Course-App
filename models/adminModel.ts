import mongoose from "mongoose";

export interface Admin {
  _id: string;
  userId: mongoose.Schema.Types.ObjectId;
  username: string;
  password: string;
  createdCourses: mongoose.Schema.Types.ObjectId[];
  image: string;
}

const adminSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  username: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
    min: 5,
    max: 15,
  },
  password: { type: String, required: true, min: 5, max: 15 },
  createdCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "courses" }],
  image: { type: String },
});

const ADMIN = mongoose.models.admins || mongoose.model("admins", adminSchema);

export default ADMIN;
