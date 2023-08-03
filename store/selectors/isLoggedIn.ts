import { selector } from "recoil";
import { userDataAtom } from "../atoms/user";

export const LoggedIn = selector({
  key: "LoggedIn",
  get: ({ get }) => {
    const userData = get(userDataAtom);
    return userData.isLoggedIn;
  },
});
