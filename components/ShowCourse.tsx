"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { Course } from "@models/courseModel";
import Card from "@components/CourseCard";
import axios from "axios";
import { NEXT_API_URL } from "@config";

function ShowCourses() {
  const { data: session } = useSession();

  const [courses, setCourse] = useState<Course[]>([]);
  const email = session?.user?.email;
  axios
    .get(`${NEXT_API_URL}/courses/purchased`, {
      headers: {
        "Content-Type": "application/json",
        userEmail: email,
      },
    })
    .then((res) => setCourse(res.data.userData[0]?.purchases || []));

  return (
    <div className="-m-4 flex flex-wrap">
      {courses.map((course) => (
        <Card key={course._id} course={course} />
      ))}
    </div>
  );
}

export default ShowCourses;
