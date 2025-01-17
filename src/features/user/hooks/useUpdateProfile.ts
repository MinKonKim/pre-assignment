import { useMutation } from "@tanstack/react-query";
import { UserAPI } from "../api";

const useUpdateProfile = () => {
  return useMutation({
    mutationFn: UserAPI.UpdateProfile,
    onSuccess: () => {
      alert("프로필 수정 성공");
    },
    onError: (error) => {
      alert(`프로필 수정 실패 ${error.message}`);
    },
  });
};

export default useUpdateProfile;
