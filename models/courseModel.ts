import mongoose from "mongoose";

export interface Course {
  _id: string;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  author: mongoose.Schema.Types.ObjectId;
}

const courseSchema = new mongoose.Schema<Course, mongoose.Model<Course>>({
  title: { type: String, required: true, max: 25 },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  thumbnail: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "admins" },
});

const COURSE =
  mongoose.models.courses || mongoose.model("courses", courseSchema);

export default COURSE;
