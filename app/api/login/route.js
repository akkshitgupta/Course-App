import { connectDB } from "../../../dbConfig/dbConfig";
import User from "../../../models/userModel";
import { NextResponse } from "next/server";

connectDB();

export async function POST(req) {
  const reqBody = await req.json();
  const { username, password } = reqBody;

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

    return NextResponse.json({
      messsage: "Login successful",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message, status: 500 });
  }
}
