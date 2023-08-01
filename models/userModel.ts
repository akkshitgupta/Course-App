import mongoose from "mongoose";

export interface User {
  _id: string;
  full_name: string;
  email: string;
  username: string;
  password: string;
  purchases: mongoose.Schema.Types.ObjectId[];
  isAuthor: boolean;
}

const userSchema = new mongoose.Schema<User, mongoose.Model<User>>({
  full_name: { type: String, required: true, min: 5, max: 15 },
  username: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
    min: 5,
    max: 15,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
    min: 5,
    max: 15,
  },
  password: { type: String, required: true, min: 5, max: 15 },
  purchases: [{ type: mongoose.Schema.Types.ObjectId, ref: "courses" }],
  isAuthor: { type: Boolean, default: false },
});

const USER = mongoose.models.users || mongoose.model("users", userSchema);

export default USER;
