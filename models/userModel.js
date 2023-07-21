import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  f_name: { type: String, required: true, min: 5, max: 15 },
  l_name: { type: String, required: true, min: 5, max: 15 },
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

const USER = mongoose.model("users", userSchema);

export default USER;
