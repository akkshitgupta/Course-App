import Image from "next/image";
import { PiCurrencyInrBold } from "react-icons/pi";

export default function EditCourseCard(props) {
  return (
    <div className="h-full w-4/5 overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-80 duration-200 hover:scale-[1.015] hover:border-green-300 hover:shadow-lg hover:shadow-green-100">
      <Image
        className="w-full object-cover object-center md:h-36 lg:h-48"
        src={
          props?.course.thumbnail ||
          "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cnNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        }
        alt="blog"
        width={1770}
        height={1180}
      />
      <div className="p-6">
        <h1 className="title-font mb-3 text-lg font-medium text-gray-900">
          {props?.course.title}
        </h1>
        <p className="mb-3 leading-relaxed">{props.course.description}</p>
        <div className="flex flex-wrap items-center">
          <span className="inline-flex items-center text-sm leading-none text-gray-700">
            <PiCurrencyInrBold />
            {props?.course.price || "Free"}
          </span>
        </div>
      </div>
    </div>
  );
}
