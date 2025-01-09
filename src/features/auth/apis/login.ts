import axios from "axios";
import { LoginRequestType, LoginResponseType } from "../type";

const signIn = async ({
  id,
  password,
  expiresIn,
}: LoginRequestType): Promise<LoginResponseType> => {
  const URL = import.meta.env.VITE_API_URL;
  try {
    const response = await axios.post(
      `${URL}/login${expiresIn ? `?expiresIn=${expiresIn}` : ""}`,
      {
        id,
        password,
      }
    );
    if (response.status === 200) {
      return response.data;
    }
    throw new Error("Login failed");
  } catch (error) {
    // 에러 처리
    //TODO: 에러 처리 로직 추가 + 에러 타입 정의+ 모듈화
    console.error("Error during login:", error);
    throw error;
  }
};

export default signIn;
