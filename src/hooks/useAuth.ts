import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { getCookie, removeCookie } from "../utils/cookie";

interface DecodedToken {
  exp: number; // 만료 시간
}

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = getCookie("accessToken");

    if (token) {
      try {
        const decoded = jwtDecode<DecodedToken>(token);
        const currentTime = Date.now() / 1000;

        if (decoded.exp > currentTime) {
          setIsAuthenticated(true);
        } else {
          // 토큰 만료 시 로그아웃 처리
          handleLogout();
        }
      } catch (error) {
        console.error("토큰 디코딩 실패:", error);
        handleLogout();
      }
    }
  }, []);

  const handleLogout = () => {
    removeCookie("accessToken");
    setIsAuthenticated(false);
  };

  return { isAuthenticated, handleLogout };
};

export default useAuth;
