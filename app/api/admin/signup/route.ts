import { connectDB } from "@dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import ADMIN from "@models/adminModel";
import USER from "@models/userModel";

connectDB();

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const { userId, username, password } = reqBody;

  try {
    const admin = await ADMIN.findOne({ username });

    if (admin) {
      return NextResponse.json({ error: "Admin already exists", status: 409 });
    }

    const newAdmin = new ADMIN({
      userId,
      username,
      password,
    });

    const saved = await newAdmin.save();
    console.log(saved);

    const user = await USER.findById(userId);
    user.isAuthor = true;

    await user.save();

    return NextResponse.json({
      saved,
      message: "User created successfully",
      status: 201,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: `signUp_Error: ${error.message}`,
      status: 500,
    });
  }
}
