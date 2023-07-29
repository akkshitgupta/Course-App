"use client";

import { loginState } from "@store/atoms/loginState";
import Link from "next/link";
import { useRecoilState } from "recoil";
import axios from "axios";
import { useEffect } from "react";

const Navbar = () => {
  const [login, setLogin] = useRecoilState(loginState);

  useEffect(() => {
    axios.get("/api/me").then((res) => {
      if (res.data.message === "Logged in") {
        setLogin(true);
      }
    });
  }, [login, setLogin]);

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
          <span className="ml-3 text-xl">Course App</span>
        </a>

        {/* Login button */}
        {!login && (
          <Link href="/login">
            <button className="mt-4 inline-flex items-center rounded border bg-white px-3 py-1 text-base text-green-600 hover:border-green-50 hover:bg-green-800 hover:text-green-50 focus:outline-none md:mt-0">
              Login
            </button>
          </Link>
        )}

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
