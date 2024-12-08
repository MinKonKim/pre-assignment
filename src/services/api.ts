import axios from "axios";
import { removeCookie, setCookie } from "../utils/cookie";

const API_URL = import.meta.env.VITE_API_URL;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ErrorHandler = (error: any) => {
  if (axios.isAxiosError(error)) {
    const message = error.response?.data?.message;
    return { message, success: false };
  } else {
    throw new Error(error + "에러가 발생하였습니다.");
  }
};

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerUser = async (data: {
  id: string;
  password: string;
  nickname: string;
}) => {
  try {
    const response = await apiClient.post("/register", data);
    return response.data;
  } catch (error) {
    ErrorHandler(error);
  }
};

export const loginUser = async (
  data: { id: string; password: string },
  expiresIn?: number
) => {
  try {
    const url = expiresIn ? `/login?expiresIn=${expiresIn}m` : "/login";

    const response = await apiClient.post(url, data);
    const accessToken = response.data.accessToken;
    if (accessToken) {
      setCookie("accessToken", accessToken, {
        path: "/",
        secure: "/",
        expires: new Date(Date.now() + expiresIn! * 60 * 1000),
      });
    }
    return response.data;
  } catch (error) {
    ErrorHandler(error);
  }
};

export const getUserInfo = async (accessToken: string) => {
  try {
    const response = await apiClient.get("/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    ErrorHandler(error);
  }
};

// 프로필 변경
export const updateProfile = async (
  data: { avatar?: File; nickname: string },
  accessToken: string
) => {
  try {
    const formData = new FormData();
    if (data.avatar) formData.append("avatar", data.avatar);
    formData.append("nickname", data.nickname);

    const response = await apiClient.patch("/profile", formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    ErrorHandler(error);
  }
};

export const logOut = async () => {
  removeCookie("accessToken");
};
