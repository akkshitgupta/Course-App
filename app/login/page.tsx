"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import ProvidersList from "@components/ProvidersList";

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  async function logIn() {
    try {
      const res = await axios.post("/api/login", user);
      if (res.data.status === 200) {
        alert(res.data.message);
        return router.push("/");
      }
      alert(res.data.message);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section className="container mx-auto flex flex-wrap items-center px-5 py-24">
      <div className="text-center md:w-1/2 md:pr-16 lg:w-3/5 lg:pr-0">
        <h1 className="text-3xl font-bold text-gray-900">
          Login to{" "}
          <span className="text-3xl font-bold text-green-500 underline">
            YOUR
          </span>{" "}
          Account
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
            Enter Password
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
          onClick={logIn}
        >
          Log In
        </button>
        <span className="mt-2 text-sm leading-7 text-gray-600">
          don&#39;t have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-green-500 underline"
          >
            create now
          </Link>{" "}
          for free
        </span>
      </div>
    </section>
  );
}
