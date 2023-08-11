"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Signup() {
  const [user, setUser] = useState({
    userId: "",
    username: "",
    password: "",
  });

  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    setUser({
      ...user,
      userId: session?.user?.id,
      image: session?.user?.image,
    });
  }, []);

  async function signUp() {
    try {
      const res = await axios.post("/api/admin/signup", user);

      if (res.data.status === 201) {
        alert("Account created successfully");
        return router.back();
      }

      return alert("Something went wrong");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section className="container mx-auto flex flex-wrap items-center px-5 py-24">
      <div className="pr-0 md:w-1/2 md:pr-16 lg:w-3/5 lg:pr-0">
        <h1 className="title-font text-3xl font-bold text-gray-900">
          <span className="text-3xl font-bold text-green-500 underline">
            OPEN
          </span>{" "}
          a Creator Account for{" "}
          <span className="text-3xl font-bold text-green-500 underline">
            FREE!
          </span>
        </h1>
      </div>
      <div className="mt-10 flex w-full flex-col gap-4 rounded-lg bg-green-50 p-8 md:ml-auto md:mt-0 md:w-1/2 lg:w-2/6">
        <h2 className="text-lg font-bold text-green-900">Sign Up</h2>
        <div>
          <label htmlFor="username" className="text-sm leading-7 text-gray-600">
            Display Name
          </label>
          <input
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            type="text"
            id="username"
            name="username"
            className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-sm leading-7 text-gray-600">
            Create Password
          </label>
          <input
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type="password"
            id="password"
            name="password"
            className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200"
          />
        </div>
        <button
          className="rounded-lg border-0 bg-green-600 px-8 py-2 text-lg text-white hover:bg-green-700 hover:font-medium focus:outline-none"
          onClick={signUp}
        >
          Sign Up
        </button>
      </div>
    </section>
  );
}
