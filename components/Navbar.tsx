"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn, useSession, signOut, getProviders } from "next-auth/react";

const Navbar = () => {
  // const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const login = true;
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const setupProvider = async () => {
      const response: any = await getProviders();
      setProviders(response);
    };
    setupProvider();
  }, []);

  return (
    <nav className="bg-green-700 text-green-100">
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

        {login ? (
          <div>
            <Image
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              width={100000}
              height={100000}
              alt="NA"
              className="relative z-20 h-10 w-10 rounded-full md:h-14 md:w-14"
              onClick={() => setToggle((prev) => !prev)}
            />
            {toggle && (
              <div
                className="absolute right-0 top-0 z-10 flex h-72 flex-col items-start rounded-md bg-green-100 px-5 py-8 text-green-800 md:right-8 md:top-14"
                onClick={() => setToggle((prev) => !prev)}
              >
                <span className="mb-3 font-semibold">{"username"}</span>
                <Link href={"/me/myPurchases"}>My Purchases</Link>
                <Link href={"/admin/signup"}>Become a Creator</Link>
                <button className="justify-self-end" onClick={() => signOut()}>
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
