import { connectDB } from "../../../dbConfig/dbConfig";
import USER from "../../../models/userModel";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { userId, username, password } = reqBody;

    // check if user exists
    const user = await USER.findOne({ username });

    if (user) {
      return NextResponse.json({ error: "User already exists", status: 409 });
    }

    const newUser = new USER({
      userId,
      username,
      password,
    });

    const saved = await newUser.save();
    console.log(saved);

    const response = NextResponse.json({
      saved,
      message: "User created successfully",
      status: 201,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({
      message: `signUp_Error: ${error.message}`,
      status: 500,
    });
  }
}
