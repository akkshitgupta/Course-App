import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@dbConfig/dbConfig";
import { headers } from "next/dist/client/components/headers";
import USER from "@models/userModel";

connectDB();

export async function GET(req: NextRequest) {
  const userEmail = headers().get("userEmail");

  try {
    const userData = await USER.aggregate([
      {
        $match: { email: userEmail },
      },
      {
        $lookup: {
          from: "courses",
          localField: "purchases",
          foreignField: "_id",
          as: "purchased_courses",
        },
      },
      {
        $unwind: "$purchased_courses",
      },
      {
        $lookup: {
          from: "admins",
          localField: "purchased_courses.author",
          foreignField: "_id",
          as: "author",
        },
      },
      {
        $unwind: "$author",
      },
      {
        $project: {
          purchases: {
            title: "$purchased_courses.title",
            _id: "$purchased_courses._id",
            price: "$purchased_courses.price",
            author: { username: "$author.username", image: "$author.image" },
            thumbnail: "$purchased_courses.thumbnail",
            description: "$purchased_courses.description",
          },
        },
      },
    ]);

    return NextResponse.json({
      message: "Purchases fetched successfully",
      status: 200,
      userData,
    });
  } catch (error) {
    console.log(`error ${error}`);
    return NextResponse.json({
      message: "not found",
      status: 500,
    });
  }
}
