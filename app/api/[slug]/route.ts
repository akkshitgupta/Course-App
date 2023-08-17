import { connectDB } from "@dbConfig/dbConfig";
import ADMIN from "@models/adminModel";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } },
) {
  try {
    const { slug } = params;
    const courses = await ADMIN.find({ slug });
    console.log(courses);

    const response = NextResponse.json({
      status: 200,
      courses,
      message: "Courses fetched successfully",
    });

    return response;
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Something went wrong",
    });
  }
}
