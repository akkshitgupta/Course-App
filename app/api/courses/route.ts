import { connectDB } from "@dbConfig/dbConfig";
import Course from "@models/courseModel";
import { NextRequest } from "next/server";

connectDB();

export async function POST(req: NextRequest) {
  const { title, description, price } = await req.json();

  const course = await Course.create({ title, description, price });
  return course;
}
