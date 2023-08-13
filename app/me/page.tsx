"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Card from "@components/CourseCard";
import { Course } from "@models/courseModel";
import { useSession } from "next-auth/react";
import { useSetRecoilState } from "recoil";
import { userDataAtom } from "@store/atoms";

function Me() {
  const { data: session } = useSession();
  const [courses, setCourse] = useState<Course[]>([]);
  const setUser = useSetRecoilState(userDataAtom);

  useEffect(() => {
    const fetchCourse = async () => {
      const email = session?.user?.email;
      console.log(email);

      const res = await axios.get("/api/courses/purchased", {
        headers: {
          "Content-Type": "application/json",
          userEmail: email,
        },
      });
      console.log(res.data);
      console.log(res.data.userData.purchases);
      setCourse(res.data.userData.purchases);
    };
    if (session?.user) {
      fetchCourse();
    }
  }, [session]);

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
