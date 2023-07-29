import Link from "next/link";
import Image from "next/image";
import { Course } from "@models/courseModel";

export default function CourseCard(props: { course: Course }) {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60">
        <Image
          className="w-full object-cover object-center md:h-36 lg:h-48"
          src={props.course.image}
          alt="blog"
          width={1770}
          height={1180}
        />
        <div className="p-6">
          {/* <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
            CATEGORY
          </h2> */}
          <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
            {props.course.title}
          </h1>
          <p className="mb-3 leading-relaxed">{props.course.description}</p>
          <div className="flex flex-wrap items-center ">
            <Link
              href={`/courses/${props.course._id}`}
              className="inline-flex items-center text-green-500 md:mb-2 lg:mb-0"
            >
              Learn More
              <svg
                className="ml-2 h-4 w-4"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <span className="ml-auto mr-3 inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
              <svg
                className="mr-1 h-4 w-4"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              1.2K
            </span>
            <span className="inline-flex items-center text-sm leading-none text-gray-400">
              <svg
                className="mr-1 h-4 w-4"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              {props.course.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
