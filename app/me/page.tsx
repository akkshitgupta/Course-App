"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Card from "@components/CourseCard";
import { Course } from "@models/courseModel";

function Me() {
  const [courses, setCourse] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourse = async () => {
      const res = await axios.get("/api/courses/purchased");
      console.log(res.data.userData);
      console.log(res.data.userData.purchases);
      setCourse(res.data.userData.purchases);
    };
    fetchCourse();
  }, []);

  return (
    <section className="text-gray-600">
      <div className="container mx-auto px-5 py-10">
        <div className="mb-20 flex w-full flex-col text-center">
          <h1 className="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
            My Purchases here
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Here are the courses you have purchased.
          </p>
        </div>
        <div className="-m-4 flex flex-wrap">
          {courses.map((course) => (
            <Card key={course._id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Me;
