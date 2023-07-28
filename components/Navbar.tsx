"use client";

import { loginState } from "@store/atoms/loginState";
import Link from "next/link";
import { useRecoilState } from "recoil";

const Navbar = () => {
  const [login, setLogin] = useRecoilState(loginState);
  // const handleEvent = () => {
  //   setLogin((prev) => !prev);
  // };

  return (
    <nav className="body-font bg-green-700 text-green-100">
      <div className="container mx-auto flex flex-col flex-wrap items-center justify-around p-5 md:flex-row">
        <a className="title-font mb-4 flex items-center font-medium md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-10 w-10 rounded-full bg-green-500 p-2 text-white"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Tailblocks</span>
        </a>

        {/* <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          <a className="mr-5 hover:text-green-200">First Link</a>
          <a className="mr-5 hover:text-green-200">Second Link</a>
          <a className="mr-5 hover:text-green-200">Third Link</a>
          <a className="mr-5 hover:text-green-200">Fourth Link</a>
        </nav> */}

        {/* Login button */}
        {/* {!login && (
          <Link href="/login">
            <button
              className="mt-4 inline-flex items-center rounded border bg-white px-3 py-1 text-base text-green-600 hover:border-green-50 hover:bg-green-800 hover:text-green-50 focus:outline-none md:mt-0"
              onClick={() => {
                setLogin((prev) => !prev);
              }}
            >
              Login */}
        {/* <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="ml-1 h-4 w-4"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg> */}
        {/* </button>
          </Link>
        )} */}
        {/* Add Course button */}
        {login && (
          <Link href="/add-course">
            <button className="mt-4 inline-flex items-center rounded border bg-white px-3 py-1 text-base text-green-600 hover:border-green-50 hover:bg-green-800 hover:text-green-50 focus:outline-none md:mt-0">
              Add Course
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
