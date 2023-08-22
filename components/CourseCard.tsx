import Link from "next/link";
import Image from "next/image";
import { Course } from "@models/courseModel";
import { PiCurrencyInrBold } from "react-icons/pi";

export default function CourseCard(props: { course: Course }) {
  return (
    <Link
      href={`/courses/${props.course._id}`}
      className="w-full p-4 md:w-1/2 lg:w-1/3"
    >
      <div className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-80 duration-200 hover:scale-[1.015] hover:border-green-300 hover:shadow-lg hover:shadow-green-100">
        <Image
          className="w-full object-cover object-center md:h-36 lg:h-48"
          src={props.course.thumbnail}
          alt="blog"
          width={1770}
          height={1180}
        />
        <div className="p-6">
          <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
            {props.course.title}
          </h1>
          <p className="mb-3 truncate leading-relaxed">
            {props.course.description}
          </p>
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center">
              <Image
                width={300}
                src={props.course?.author.image || ``}
                height={300}
                className="h-10 w-10 rounded-full"
                alt="NA"
              />
              <span className="pl-2">
                {props.course?.author.username || ""}
              </span>
            </div>

            <span className="inline-flex items-center text-sm leading-none text-gray-700">
              <PiCurrencyInrBold />
              {props.course.price || "Free"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
