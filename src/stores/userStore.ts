import { create } from "zustand";

interface UserInfo {
  id: string;
  nickname: string;
  avatar: string | null;
}

interface UserStore {
  user: UserInfo | null; // 유저 정보
  setUser: (user: UserInfo) => void; // 유저 정보 설정
  clearUser: () => void; // 유저 정보 초기화
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
