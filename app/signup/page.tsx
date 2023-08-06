"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ProvidersList from "@components/ProvidersList";

export default function Signup() {
  const router = useRouter();
  const [user, setUser] = useState({
    full_name: "",
    username: "",
    password: "",
    email: "",
  });

  async function signUp() {
    const res = await axios.post("/api/signup", user, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    if (res.data.status === 201) {
      alert("Account created successfully");
      return router.push("/login");
    }
    if (res.data.status === 409) {
      return alert("User already exists");
    }
  }

  return (
    <section className="container mx-auto flex flex-wrap items-center px-5 py-24">
      <div className="mx-auto md:w-1/2 md:pr-16 lg:w-3/5 lg:pr-0">
        <h1 className="title-font text-3xl font-bold text-gray-900">
          Create an account for{" "}
          <span className="text-3xl font-bold text-green-500 underline">
            FREE!
          </span>
        </h1>
      </div>
      <div className="mx-auto mt-10 flex flex-col rounded-lg bg-green-50 p-8 md:ml-auto md:mt-0 md:w-1/2 lg:w-2/6">
        <span className="my-2 text-sm font-medium">
          Login with your social media account
        </span>
        <ProvidersList />
        <div className="relative mb-4 flex flex-col">
          <span className="my-2 text-sm font-medium">
            OR login with your credentials
          </span>
          <label
            htmlFor="full_name"
            className="text-sm leading-7 text-gray-600"
          >
            Full Name
          </label>
          <input
            onChange={(e) => setUser({ ...user, full_name: e.target.value })}
            type="text"
            id="full_name"
            name="full_name"
            className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="text-sm leading-7 text-gray-600">
            Email
          </label>
          <input
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            type="email"
            id="email"
            name="email"
            className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="username" className="text-sm leading-7 text-gray-600">
            Username
          </label>
          <input
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            type="text"
            id="username"
            name="username"
            className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200"
          />
        </div>
        <div className="relative mb-4">
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
        <span className="mt-2 text-sm leading-7 text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-green-500 underline"
          >
            Login here
          </Link>{" "}
          for free
        </span>
      </div>
    </section>
  );
}
