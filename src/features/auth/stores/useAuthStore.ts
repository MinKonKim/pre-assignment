import Cookies from "js-cookie";
import { create } from "zustand";
import { LoginResponseType } from "../types";
interface AuthState {
  user: LoginResponseType | null;
  isAuthenticated: boolean;
  setUser: (user: LoginResponseType) => void;
  clearUser: () => void;
  checkAuth: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) => set({ user: user, isAuthenticated: true }),
  clearUser: () => set({ user: null, isAuthenticated: false }),
  checkAuth: () => {
    const token = Cookies.get("accessToken");
    if (token) {
      set({ isAuthenticated: true });
    } else {
      set({ isAuthenticated: false });
    }
  },
}));

export default useAuthStore;
