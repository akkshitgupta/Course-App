"use client";

import axios from "axios";
import { useEffect, useState } from "react";

function Me() {
  const [data, setData] = useState<any>();
  useEffect(() => {
    axios.get("/api/me").then((res) => {
      console.log(res.data);
      setData(res.data.userData);
    });
  }, []);

  return (
    <div>
      <h3>This is me route</h3>
      <p>{data?.full_name}</p>
    </div>
  );
}

export default Me;
