import { create } from "zustand";

interface AuthState {
  user: string | null;
  role: "admin" | "user" | null; // Role 추가
  setUser: (userId: string) => void;
  clearUser: () => void;
  isAuthenticated: boolean;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  role: null,
  setUser: (userId) => set({ user: userId, isAuthenticated: true }),
  clearUser: () => set({ user: null, isAuthenticated: false }),
  isAuthenticated: false,
}));

export default useAuthStore;
