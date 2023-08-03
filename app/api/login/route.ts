import { connectDB } from "@dbConfig/dbConfig";
import User from "@models/userModel";
import { NextRequest, NextResponse } from "next/server";
import generateToken from "@helpers/generateToken";

connectDB();

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const { username, password } = reqBody;

  if (!username || !password) {
    return NextResponse.json({
      message: "Please provide username and password",
      status: 400,
    });
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return NextResponse.json({
        message: "User does not exist",
        status: 404,
      });
    }

    if (user.password !== password) {
      return NextResponse.json({
        message: "Invalid credentials",
        status: 401,
      });
    }

    const token = generateToken(user);
    const response = NextResponse.json({
      message: "Login successful",
      status: 200,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      // path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ message: error.message, status: 500 });
  }
}
