import { useEffect } from "react";
import useAuthStore from "../stores/useAuthStore";

const useAuth = () => {
  const { isAuthenticated, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return { isAuthenticated };
};

export default useAuth;
