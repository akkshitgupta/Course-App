// decode the token to get the username

import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@dbConfig/dbConfig";
import User from "@models/userModel";
import verifyToken from "@helpers/verifyToken";

connectDB();

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value || "";
  if (!token) {
    return NextResponse.json({
      message: "logged out",
      status: 401,
    });
  }

  const username = verifyToken(token);

  const userData = await User.findOne({ username }).select("-password");
  if (!userData) {
    return NextResponse.next();
  }

  return NextResponse.json({
    message: "Logged in",
    status: 200,
    userData,
  });
}
