import { connectDB } from "@dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import ADMIN from "@models/adminModel";

connectDB();

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const { username, password } = reqBody;
  console.log(reqBody);
  try {
    const admin = await ADMIN.findOne({ username });

    if (!admin) {
      return NextResponse.json({ error: "Admin does not exist", status: 404 });
    }

    if (admin.password !== password) {
      return NextResponse.json({ error: "Password is incorrect", status: 401 });
    }

    const response = NextResponse.json({
      message: "Login successfully",
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
