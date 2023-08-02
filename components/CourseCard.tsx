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
          <p className="mb-3 truncate leading-relaxed">
            {props.course.description}
          </p>
          <div className="flex flex-wrap items-center ">
            <span className="ml-auto mr-3 inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-700 md:ml-0 lg:ml-auto">
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
            <span className="inline-flex items-center text-sm leading-none text-gray-700">
              <PiCurrencyInrBold />
              {props.course.price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
