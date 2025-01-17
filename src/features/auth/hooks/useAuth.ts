import { useEffect, useState } from "react";
import { getUserFromStorage } from "../utils";

const useAuth = () => {
  const [user, setUser] = useState<string>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const userId = getUserFromStorage();
      setUser(userId);
    } catch (error) {
      console.error("유저 데이터 가져오는 중 에러 발생.:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { user, loading };
};

export default useAuth;
