import mongoose, { mongo } from "mongoose";

const adminSchema = mongoose.Schema({
  full_name: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  username: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
    min: 5,
    max: 15,
  },
  email: {
    type: mongoose.Schema.Types.email,
    ref: "users",
  },
  password: { type: String, required: true, min: 5, max: 15 },
  createdCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "courses" }],
});

const ADMIN = mongoose.model("admins", adminSchema);

export default ADMIN;
