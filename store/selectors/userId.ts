import { selector } from "recoil";
import { userDataAtom } from "../atoms/user";

export const userIdSelector = selector({
  key: "userIsSelector",
  get: ({ get }) => {
    const userData = get(userDataAtom);
    return userData.userId;
  },
});
