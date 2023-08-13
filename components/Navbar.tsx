"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import axios from "axios";
import ProviderList from "@components/ProvidersList";

const Navbar = () => {
  const { data: session } = useSession();
  const [toggle, setToggle] = useState(false);
  const [overlay, setOverlay] = useState(false);

  return (
    <nav className="bg-green-700 text-green-100">
      {overlay && (
        <div
          className="absolute z-50 flex min-h-screen w-screen items-center justify-center bg-gray-600 bg-opacity-80"
          onClick={() => setOverlay((prev) => !prev)}
        >
          <div className="w-1/3 rounded-lg bg-green-500  px-4 py-10">
            <p className="text-center text-lg font-semibold">
              Login with your social media account
            </p>
            <ProviderList />
          </div>
        </div>
      )}
      <div className="container mx-auto flex items-center justify-between p-5">
        <Link href={"/"} className="flex items-center font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-8 w-8 rounded-full bg-green-500 p-2 text-white md:h-10 md:w-10"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Course App</span>
        </Link>

        {session?.user ? (
          <div>
            <Image
              src={session.user.image || ""}
              width={400}
              height={400}
              alt="NA"
              className="relative z-20 h-10 w-10 rounded-full md:h-14 md:w-14"
              onClick={() => setToggle((prev) => !prev)}
            />
            {toggle && (
              <div
                className="absolute right-0 top-0 z-10 flex h-72 flex-col items-start rounded-md bg-green-100 px-5 py-8 text-green-800 md:right-8 md:top-14"
                onClick={() => setToggle((prev) => !prev)}
              >
                <span className="mb-3 font-semibold">{session.user.name}</span>
                <Link href={"/me"}>My Purchases</Link>
                <Link href={"/admin/signup"}>Become a Creator</Link>
                <button className="justify-self-end" onClick={() => signOut()}>
                  Log Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <button
              className="rounded-md bg-green-50 px-3 py-1.5 text-gray-700 hover:shadow-md"
              onClick={() => setOverlay((prev) => !prev)}
            >
              Login In
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
