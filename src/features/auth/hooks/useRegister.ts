import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../services";

const useRegister = () => {
  return useMutation({
    mutationFn: AuthService.register,
    onSuccess: () => {
      alert("회원가입 성공");
    },
    onError: (error) => {
      alert(`회원가입 실패 ${error.message}`);
    },
  });
};

export default useRegister;
