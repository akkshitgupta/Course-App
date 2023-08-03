"use client";

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { userDataAtom } from "@store/atoms";

function Me() {
  const [data, setData] = useRecoilState(userDataAtom);

  return (
    <div>
      <h3>This is me route</h3>
      <p>{data?.username}</p>
    </div>
  );
}

export default Me;
