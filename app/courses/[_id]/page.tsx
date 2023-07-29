"use client";

import { useEffect } from "react";
import axios from "axios";

export default function Page({ params }: { params: { _id: string } }) {
  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await axios.get(`/api/courses/${params._id}`, {
          headers: { "Content-Type": "application/json" },
        });
      } catch (error) {
        console.log(`error: ${error}`);
      }
    }
    fetchPost();
  }, [params._id]);

  return <div>My Post: {params._id}</div>;
}
