"use client";

import axios from "axios";
import { useState } from "react";

export default function AddingCourse() {
  const [course, setCourse] = useState({});

  async function addCourse() {
    try {
      const res = await axios.post("/api/courses", course);
      console.log(res);
      setCourse({});
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className="container mx-auto flex flex-wrap items-center px-5 py-24">
      <div className="self-start pr-0 md:w-1/2 md:pr-16 lg:w-3/5 lg:pr-0">
        <h1 className="text-3xl font-bold text-gray-900">
          <span className="text-3xl font-bold text-green-500 underline">
            ADD
          </span>{" "}
          COURSE
        </h1>
      </div>
      <div className="mt-10 flex w-full flex-col rounded-lg bg-green-50 p-8 md:ml-auto md:mt-0 md:w-1/2 lg:w-2/6">
        <h2 className="mb-5 text-lg font-bold text-green-900">Sign Up</h2>
        <div className="relative mb-4">
          <label htmlFor="title" className="text-sm leading-7 text-gray-600">
            Title
          </label>
          <input
            onChange={(e) => setCourse({ ...course, title: e.target.value })}
            type="text"
            id="title"
            name="title"
            className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200"
          />
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="description"
            className="text-sm leading-7 text-gray-600"
          >
            Description
          </label>
          <input
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
            type="text"
            id="description"
            name="description"
            className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="price" className="text-sm leading-7 text-gray-600">
            Price
          </label>
          <input
            onChange={(e) => setCourse({ ...course, price: e.target.value })}
            type="number"
            id="price"
            name="price"
            className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="image" className="text-sm leading-7 text-gray-600">
            Image URL
          </label>
          <input
            onChange={(e) => setCourse({ ...course, image: e.target.value })}
            type="url"
            id="image"
            name="image"
            className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200"
          />
        </div>
        <div className="mt-8 flex w-full flex-col-reverse justify-between gap-4 lg:flex-row">
          <button
            className="rounded-lg border-2 border-green-600 px-8 py-2 text-lg text-green-600 focus:outline-none"
            onClick={() => setCourse({})}
          >
            Cancel
          </button>
          <button
            className="rounded-lg border-0 bg-green-600 px-8 py-2 text-lg text-white hover:bg-green-700 focus:outline-none"
            onClick={addCourse}
          >
            Add
          </button>
        </div>
      </div>
    </section>
  );
}
