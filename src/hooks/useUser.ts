import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getUserInfo,
  loginUser,
  registerUser,
  updateProfile,
} from "../services/api";
import {
  LoginRequest,
  RegisterRequest,
  UpdateProfileRequest,
} from "../types/api";

// 회원가입 훅
export const useSignup = () => {
  return useMutation({
    mutationFn: (data: RegisterRequest) => registerUser(data),
  });
};

// 로그인 훅
export const useLogin = () => {
  return useMutation({
    mutationFn: ({
      data,
      expiresIn,
    }: {
      data: LoginRequest;
      expiresIn?: number;
    }) => loginUser(data, expiresIn),
  });
};

// 회원정보 조회 훅
export const useUserInfo = (accessToken: string) => {
  return useQuery({
    queryKey: ["user", accessToken],
    queryFn: () => getUserInfo(accessToken),
    enabled: !!accessToken, // accessToken이 존재할 때만 실행
  });
};

// 프로필 변경 훅
export const useUpdateProfile = (accessToken: string) => {
  return useMutation({
    mutationFn: (data: UpdateProfileRequest) =>
      updateProfile(data, accessToken),
  });
};
