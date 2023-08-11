import { connectDB } from "@dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import ADMIN from "@models/adminModel";
import USER from "@models/userModel";

connectDB();

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const { userId, username, password, image } = reqBody;

  try {
    const admin = await ADMIN.findOne({ username });

    if (admin) {
      return NextResponse.json({ error: "Admin already exists", status: 409 });
    }
    const user = await USER.findById(userId);

    const newAdmin = new ADMIN({
      userId,
      username,
      password,
      image,
    });

    const saved = await newAdmin.save();
    console.log(saved);

    user.isAuthor = true;
    await user.save();

    const response = NextResponse.json({
      saved,
      message: "Admin created successfully",
      status: 201,
    });

    response.cookies.set("admin-token", saved._id, {
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
