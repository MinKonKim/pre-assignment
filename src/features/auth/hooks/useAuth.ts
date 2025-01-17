import { useEffect } from "react";
import useAuthStore from "../stores/useAuthStore";

const useAuth = () => {
  const { isAuthenticated, user, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return { isAuthenticated, user };
};

export default useAuth;
