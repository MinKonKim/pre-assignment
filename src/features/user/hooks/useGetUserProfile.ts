import { useQuery } from "@tanstack/react-query";
import { UserAPI } from "../api";
import { useUserStore } from "../store";
import { UserInfoType } from "../types";

const useGetUserProfile = () => {
  const setUser = useUserStore((state) => state.setUser);
  return useQuery<UserInfoType, Error>({
    queryKey: ["userProfile"],
    queryFn: async () => {
      const data = await UserAPI.getUserProfile();
      setUser(data);
      return data;
    },
  });
};

export default useGetUserProfile;
