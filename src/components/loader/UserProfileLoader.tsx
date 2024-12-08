import { useEffect } from "react";
import { useUserInfo } from "../../hooks/useUser";
import { useUserStore } from "../../stores/userStore";

const UserProfileLoader = ({ accessToken }: { accessToken: string }) => {
  const { data: userInfo, isSuccess } = useUserInfo(accessToken);
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    if (isSuccess && userInfo) {
      setUser(userInfo); // Zustand에 유저 정보 저장
    }
  }, [isSuccess, userInfo, setUser]);

  return null; // UI를 렌더링하지 않고 상태 업데이트만 수행
};

export default UserProfileLoader;
