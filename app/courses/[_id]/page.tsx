"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Course } from "@models/courseModel";
import axios from "axios";
import Link from "next/link";

export default function Page({ params }: { params: { _id: string } }) {
  const [course, setCourse] = useState<Course>();
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

  return (
    <section className="text-gray-600">
      <div className="container mx-auto flex flex-col px-5 py-12">
        <div className="mx-auto lg:w-5/6">
          <h1 className="relative bottom-6 z-10 text-center font-title text-5xl text-green-800 underline decoration-green-300">
            {course?.title}
          </h1>

          <div className="h-64 overflow-hidden rounded-lg">
            <Image
              alt="content"
              src={course?.image || "https://dummyimage.com/720x4001"}
              width={1035}
              height={500}
            />
          </div>
          <div className="mt-10 flex flex-col sm:flex-row">
            <div className="text-center sm:w-1/3 sm:py-8 sm:pr-8">
              {/* <div className="inline-flex h-20 w-20 items-center justify-center rounded-full border-2 border-green-200 p-1"> */}
              <Image
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                width={100}
                height={100}
                alt="NA"
                className="inline-flex h-28 w-28 items-center justify-center rounded-full border-2 border-green-200 p-1"
              />
              {/* </div> */}
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="title-font mt-4 text-lg font-medium text-gray-900">
                  Phoebe Caulfield
                </h2>
                <div className="mb-4 mt-2 h-1 w-12 rounded bg-green-500"></div>
                <p className="text-base">
                  Raclette knausgaard hella meggs normcore williamsburg enamel
                  pin sartorial venmo tbh hot chicken gentrify portland.
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-col border-t border-gray-200 pt-4 text-justify sm:mt-0 sm:w-2/3 sm:border-l sm:border-t-0 sm:py-8 sm:pl-8">
              <p className="text-lg leading-relaxed">{course?.description}</p>
              <div className="mt-8 flex items-center justify-between">
                <span className="pl-8 text-xl font-semibold text-gray-500">
                  ₹{course?.price}
                </span>
                <Link
                  href={`buy/${params._id}`}
                  className="w-40 rounded-md bg-green-700 py-3 text-center text-white"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
