import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
  title: { type: String, required: true, max: 25 },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "admins" },
});

const COURSE = mongoose.model("courses", courseSchema);

export default COURSE;
