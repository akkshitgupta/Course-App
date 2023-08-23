"use client";

import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ProviderList from "@components/ProvidersList";

const Logged = () => {
  const { data: session } = useSession();
  const [toggle, setToggle] = useState(false);
  const [overlay, setOverlay] = useState(false);

  return (
    <div>
      {overlay && (
        <div
          className="absolute left-0 top-0 z-50 flex min-h-screen w-screen items-center justify-center bg-gray-600 bg-opacity-80"
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
        {session?.user ? (
          <div className="flex items-center gap-16">
            {session?.user.author && (
              <Link
                href={"/courses/addCourse"}
                className="rounded-md border border-white px-2 py-1 text-lg font-semibold"
              >
                Add Course
              </Link>
            )}
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
                  className="absolute right-0 top-0 z-10 flex h-72 w-fit flex-col items-start rounded-md bg-green-100 px-5 py-8 text-green-800 md:right-8 md:top-14"
                  onClick={() => setToggle((prev) => !prev)}
                >
                  <span className="mb-3 font-semibold">
                    {session.user.name}
                  </span>
                  <Link href={"/me"}>My Purchases</Link>
                  {session?.user.author ? (
                    <Link href={"/myCourses"}>My Courses</Link>
                  ) : (
                    <Link href={"/admin/signup"}>Become a Creator</Link>
                  )}
                  <button
                    className="justify-self-end"
                    onClick={() => signOut()}
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
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
    </div>
  );
};

export default Logged;
