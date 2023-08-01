"use client";

import Card from "@components/CourseCard";
import { Course } from "@models/courseModel";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    axios.get("/api/courses").then((res) => {
      setCourses(res.data.courses);
    });
  }, []);

  return (
    <section className="text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="-m-4 flex flex-wrap">
          {courses.map((course) => (
            <Card key={course._id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
