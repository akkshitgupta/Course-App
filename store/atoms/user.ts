import { atom } from "recoil";
import { Course } from "@models/courseModel";
import { loginState } from "./loginState";

export const userDataAtom = atom({
  key: "userDataAtom",
  default: {
    userId: "",
    username: "",
    purchases: <Course[]>[],
    cart: <Course[]>[],
    isAuthor: false,
    created: <Course[]>[],
    wishList: <Course[]>[],
    isLoggedIn: false,
  },
});
