"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import CourseCard from "@components/CourseCard";

export default function AuthorPage({ params }: { params: { slug: string } }) {
  const [courseData, setCourseData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await axios.get(`/api/${params.slug}`, {
          headers: { "Content-Type": "application/json" },
        });
        setCourseData(res.data.course);
      } catch (error) {
        console.log(`error: ${error}`);
      }
    }
    fetchPost();
  }, [params.slug]);

  return (
    <section className="text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-20 flex w-full flex-wrap">
          <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
            <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
              {params.slug}
            </h1>
            <div className="h-1 w-20 rounded bg-indigo-500"></div>
          </div>
          <p className="w-full leading-relaxed text-gray-500 lg:w-1/2">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven&#39;t heard of them man bun deep jianbing selfies heirloom
            prism food truck ugh squid celiac humblebrag.
          </p>
        </div>
        {/* <div className="-m-4 flex flex-wrap">
          <div className="p-4 md:w-1/2 xl:w-1/4">
            {courseData.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
}
