import { create } from "zustand";
import { UserInfoType } from "../types";

interface UserState {
  user: UserInfoType | null;
  setUser: (user: UserInfoType) => void;
  clearUser: () => void;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));

export default useUserStore;
