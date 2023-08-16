import { NextResponse, type NextRequest } from "next/server";
import { connectDB } from "@dbConfig/dbConfig";
import USER from "@models/userModel";

connectDB();

export async function POST(req: NextRequest) {
  const { courseId, userid } = await req.json();

  const user = await USER.findOneAndUpdate(
    { _id: userid },
    { $push: { purchases: courseId } },
    { new: true },
  );

  if (user) {
    return NextResponse.json({
      status: 201,
      message: "Course purchased successfully",
    });
  }
}
