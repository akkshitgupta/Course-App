import { connectDB } from "@dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import ADMIN from "@models/adminModel";

connectDB();

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const { username, password } = reqBody;

  try {
    const admin = await ADMIN.findOne({ username });

    if (!admin) {
      return NextResponse.json({ error: "Admin doesn't exists", status: 409 });
    }

    const response = NextResponse.json({
      message: "Logged in successfully",
      status: 200,
    });

    response.cookies.set("admin-token", admin._id, {
      httpOnly: true,
      path: "/",
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({
      message: `signUp_Error: ${error.message}`,
      status: 500,
    });
  }
}
