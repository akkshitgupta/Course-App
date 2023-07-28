import { connectDB } from "../../../dbConfig/dbConfig";
import USER from "../../../models/userModel";
import { NextRequest, NextResponse } from "next/server";
import generateToken from "@helpers/generateToken";

connectDB();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { full_name, email, username, password } = reqBody;

    // check if user exists
    const user = await USER.findOne({ $or: [{ email }, { username }] });

    if (user) {
      return NextResponse.json({ error: "User already exists", status: 409 });
    }

    const newUser = new USER({
      full_name,
      email,
      username,
      password,
    });

    const saved = await newUser.save();
    const token = generateToken(newUser);

    const response = NextResponse.json({
      saved,
      message: "User created successfully",
      status: 201,
    });

    response.cookies.set("token", token, {
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
