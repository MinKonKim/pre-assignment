import { useEffect, useState } from "react";
import { AuthService } from "../services";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const authStatus = await AuthService.checkAuth();
      setIsAuthenticated(authStatus);
    };

    checkAuth();
  }, []);

  return isAuthenticated;
};

export default useAuth;
