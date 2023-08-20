import Card from "@components/CourseCard";
import { Course } from "@models/courseModel";
import axios from "axios";

export default async function Home() {
  const response = await axios.get("http://localhost:3000/api/courses");
  const courses: Course[] = response.data.courses;

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
