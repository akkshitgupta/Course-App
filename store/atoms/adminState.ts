import { atom } from "recoil";

export const adminState = atom({
  key: "adminState",
  default: {
    isAdmin: false,
    adminId: "",
  },
});
