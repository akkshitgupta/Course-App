import { selector } from "recoil";
import { adminState } from "../atoms";

export const isAdmin = selector({
  key: "isAdmin",
  get: ({ get }) => {
    const admin = get(adminState);
    return admin.isAdmin;
  },
});
