import { NextResponse, type NextRequest } from "next/server";
import { connectDB } from "@dbConfig/dbConfig";
import USER from "@models/userModel";

connectDB();

export async function POST(req: NextRequest) {
  const { courseId, userEmail } = await req.json();
  console.log(courseId, userEmail);
  const user = await USER.findOneAndUpdate(
    { email: userEmail },
    { $push: { purchases: courseId } },
    { new: true },
  );

  console.log(user);

  if (user) {
    return NextResponse.json({
      status: 201,
      message: "Course purchased successfully",
    });
  }
}
