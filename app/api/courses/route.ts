import { connectDB } from "@dbConfig/dbConfig";
import Course from "@models/courseModel";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const { title, description, price, image } = reqBody;

  const course = new Course({ title, description, price, image });
  const saved = await course.save();
  console.log(saved);

  const response = NextResponse.json({
    status: 201,
    message: "Course created successfully",
  });

  return response;
}

export async function GET(params: { _id: string }) {
  const { _id } = params;
  console.log(_id);
  if (_id) {
    const course = await Course.findById(_id);
    console.log(course);
    const response = NextResponse.json({
      status: 200,
      course,
    });
    return response;
  }
  const courses = await Course.find();
  const response = NextResponse.json({
    status: 200,
    courses,
  });

  return response;
}
