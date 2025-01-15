import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../services";

const useLogin = () => {
  return useMutation({
    mutationFn: AuthService.login,
    onSuccess: () => {
      alert("로그인 성공");
    },
    onError: (error) => {
      alert(`로그인 실패 ${error.message}`);
    },
  });
};

export default useLogin;
