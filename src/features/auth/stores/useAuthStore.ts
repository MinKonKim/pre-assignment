import Cookies from "js-cookie";
import { create } from "zustand";
interface AuthState {
  isAuthenticated: boolean;
  checkAuth: () => void;
  clearCookie: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  checkAuth: () => {
    const token = Cookies.get("accessToken");
    if (token) {
      set({ isAuthenticated: true });
    } else {
      set({ isAuthenticated: false });
    }
  },
  clearCookie: () => {
    Cookies.remove("accessToken");
    set({ isAuthenticated: false });
  },
}));

export default useAuthStore;
