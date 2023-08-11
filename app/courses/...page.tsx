// "use client";

// import { useEffect, useState } from "react";
// import Card from "@components/CourseCard";
// import axios from "axios";
// import { Course } from "@models/courseModel";

// export default function Courses() {
//   const [courses, setCourses] = useState<Course[]>([]);

//   useEffect(() => {
//     async function fetchCourses() {
//       try {
//         const res = await axios.get("/api/courses");
//         const courses = res.data.courses;
//         setCourses(courses);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchCourses();
//   }, []);

//   return (
//     <section className="container mx-auto px-5 py-24">
//       <div className="-m-4 flex flex-wrap">
//         {courses.map((course) => (
//           <Card key={course._id} course={course} />
//         ))}
//       </div>
//     </section>
//   );
// }
