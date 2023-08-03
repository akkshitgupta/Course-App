import { selector } from "recoil";
import { userDataAtom } from "../atoms/user";

export const usernameSelector = selector({
  key: "usernameSelector",
  get: ({ get }) => {
    const userData = get(userDataAtom);
    return userData.username;
  },
});
