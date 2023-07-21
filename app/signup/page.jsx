"use client";

import { useState } from "react";
import axios from "axios";

export default function Example() {
  const [user, setUser] = useState({
    f_name: "",
    l_name: "",
    username: "",
    password: "",
    email: "",
  });

  async function signup() {
    try {
      const res = await axios.post("http://localhost:3002/user/signup", user);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center py-7">
        <div className="rounded-2xl border border-green-700 p-8 lg:w-2/6 lg:p-16">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-green-900">
              Create an Account
            </h2>
          </div>
          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            {/* name */}
            <div className="mb-3">
              <label
                htmlFor="f_name"
                className="block text-sm font-medium leading-6 text-green-900"
              >
                Fisrt Name
              </label>

              <input
                id="f_name"
                name="f_name"
                type="text"
                autoComplete="f_name"
                required
                onChange={(e) => setUser({ ...user, f_name: e.target.value })}
                className="block w-full rounded-md border-0 py-1.5 text-green-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>

            {/* l_name */}
            <div className="mb-3">
              <label
                htmlFor="l_name"
                className="block text-sm font-medium leading-6 text-green-900"
              >
                Last Name
              </label>

              <input
                id="l_name"
                name="l_name"
                type="text"
                autoComplete="l_name"
                required
                onChange={(e) => setUser({ ...user, l_name: e.target.value })}
                className="block w-full rounded-md border-0 py-1.5 text-green-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>

            {/* email */}
            <div className="mb-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-green-900"
              >
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="block w-full rounded-md border-0 py-1.5 text-green-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>

            {/* username */}
            <div className="mb-3">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-green-900"
              >
                Username
              </label>

              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                className="block w-full rounded-md border-0 py-1.5 text-green-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>

            {/* password */}
            <div className="mb-3">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-green-900"
                >
                  Create Password
                </label>
              </div>

              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="block w-full rounded-md border-0 py-1.5 text-green-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>

            {/* button */}
            <div>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  signup();
                }}
                className="mt-6 w-full rounded-md bg-green-700 px-3 py-2 text-center text-sm font-semibold leading-7 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
