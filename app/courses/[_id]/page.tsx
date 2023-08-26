"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Course } from "@models/courseModel";
import axios from "axios";
import Link from "next/link";
import { PiCurrencyInrBold } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";
import { NEXT_API_URL } from "@config";
import { Session, User } from "next-auth";

export default function Page({ params }: { params: { _id: string } }) {
  const router = useRouter();
  const [user, setSession] = useState<Session>();
  const userId = async () => {
    const session = await getSession();
    if (session?.user) {
      setSession(session);
    }
    return;
  };

  const [course, setCourse] = useState({} as Course);
  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await axios.get(`/api/courses`, {
          headers: { "Content-Type": "application/json", id: params._id },
        });
        setCourse(res.data.course);
      } catch (error) {
        console.log(`error: ${error}`);
      }
    }
    fetchPost();
  }, [params._id]);

  userId();

  const buyCourse = async (id: string) => {
    try {
      if (!user) {
        return alert("Please login to buy the course");
      }
      const res = await axios.post(`${NEXT_API_URL}/courses/buy`, {
        courseId: id,
        userid: user?.user.id,
      });
      console.log(res.data);
      return router.push("/me");
    } catch (error) {
      console.log(error);
    }
  };

  const editCourse = async (id: string) => {
    try {
      const res = await axios.patch(`${NEXT_API_URL}/courses`, {
        courseId: id,
        userid: user?.user.id,
      });
      console.log(res.data);
      return router.push("/me");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="text-gray-600">
      <div className="container mx-auto flex flex-col px-5 py-12">
        <div className="mx-auto lg:w-5/6">
          <h1 className="font-title relative bottom-6 z-10 text-center text-5xl text-green-800 underline decoration-green-300">
            {course?.title}
          </h1>

          <div className="h-64 overflow-hidden rounded-lg">
            <Image
              alt="content"
              src={course?.thumbnail || "https://dummyimage.com/720x4001"}
              width={1035}
              height={500}
            />
          </div>
          <div className="mt-10 flex flex-col sm:flex-row">
            <div className="text-center sm:w-1/3 sm:py-8 sm:pr-8">
              {/* <div className="inline-flex h-20 w-20 items-center justify-center rounded-full border-2 border-green-200 p-1"> */}
              <Link href={`/${course?.author?.username}`}>
                <Image
                  src={course?.author?.image || ""}
                  width={100}
                  height={100}
                  alt="NA"
                  className="inline-flex h-28 w-28 items-center justify-center rounded-full border-2 border-green-200 p-1"
                />
              </Link>
              {/* </div> */}
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="title-font mt-4 text-lg font-medium text-gray-900">
                  {course?.author?.username || ""}
                </h2>
                <div className="mb-4 mt-2 h-1 w-12 rounded bg-green-500"></div>
                <p className="text-base">{course?.author?.about || ""}</p>
              </div>
            </div>
            <div className="mt-4 flex flex-col border-t border-gray-200 pt-4 text-justify sm:mt-0 sm:w-2/3 sm:border-l sm:border-t-0 sm:py-8 sm:pl-8">
              <p className="text-lg leading-relaxed">{course?.description}</p>
              <div className="mt-8 flex items-center justify-between">
                <span className="flex items-center pl-8 text-xl font-semibold text-gray-500">
                  <PiCurrencyInrBold className="pr-1 text-2xl font-black" />
                  {course?.price || "Free"}
                </span>
                <div>
                  {user?.user.author && (
                    <button
                      onClick={() => editCourse(course._id)}
                      className="mr-2 w-32 rounded-md border border-green-700 py-3 text-center text-green-700"
                    >
                      Edit Course
                    </button>
                  )}
                  <button
                    onClick={() => buyCourse(course._id)}
                    className="w-32 rounded-md bg-green-700 py-3 text-center text-white"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
