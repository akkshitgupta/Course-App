import { NEXT_API_URL } from "@config";
import { Course } from "@models/courseModel";
import Card from "@components/CourseCard";
import axios from "axios";

export default async function Home() {
  const resp = await axios.get(`${NEXT_API_URL}/courses`);
  const courses: Course[] = await resp.data.courses;

  return (
    <section className="text-gray-600">
      <div className="container mx-auto px-5 py-6">
        <div className="flex flex-wrap">
          {courses.map((course) => (
            <Card key={course._id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
