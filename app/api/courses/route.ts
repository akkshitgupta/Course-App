import { connectDB } from "@dbConfig/dbConfig";
import Course from "@models/courseModel";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/dist/client/components/headers";
import ADMIN from "@models/adminModel";

connectDB();

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const { title, description, price, image } = reqBody;

  const author = req.cookies.get("admin-token")?.value || "";

  const course = new Course({
    title,
    description,
    price,
    thumbnail: image,
    author,
  });
  const saved = await course.save();
  console.log(saved);

  const addCourseToAuthor = await ADMIN.updateOne(
    { _id: author },
    {
      $push: { createdCourses: saved._id },
    },
  );

  console.log(addCourseToAuthor);

  const response = NextResponse.json({
    status: 201,
    message: "Course created successfully",
  });

  return response;
}

export async function GET() {
  const useHeader = headers();
  const id = useHeader.get("id");
  if (id) {
    const course = await Course.findById(id);

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
    message: "Courses fetched successfully",
  });

  return response;
}
