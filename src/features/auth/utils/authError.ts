import axios, { AxiosError } from "axios";
import { AUTH_ERROR_CODES, AuthError } from "../types/error";

const handleError = (error: unknown): never => {
  // Axios 에러인지 확인
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<{ message: string }>;

    // HTTP 상태 코드별 에러 메시지 처리
    switch (axiosError.response?.status) {
      case 400:
        throw new AuthError(
          "아이디 또는 비밀번호가 올바르지 않습니다.",
          AUTH_ERROR_CODES.INVALID_INPUT,
          400
        );
      case 401:
        throw new AuthError(
          "잘못된 인증 정보입니다. 다시 시도해 주세요.",
          AUTH_ERROR_CODES.INVALID_CREDENTIALS,
          401
        );
      case 403:
        throw new AuthError(
          "계정이 잠겨 있습니다. 고객센터에 문의하세요.",
          AUTH_ERROR_CODES.ACCOUNT_LOCKED,
          403
        );
      case 500:
        throw new AuthError(
          "서버에서 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.",
          AUTH_ERROR_CODES.SERVER_ERROR,
          500
        );
      default:
        if (!axiosError.response) {
          // 네트워크 오류 처리
          console.error("네트워크 에러:", error);
          throw new AuthError(
            "네트워크 문제가 발생했습니다. 인터넷 연결을 확인해 주세요.",
            AUTH_ERROR_CODES.NETWORK_ERROR,
            0
          );
        }
        // 기타 예기치 못한 오류
        throw new AuthError(
          "예기치 못한 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.",
          AUTH_ERROR_CODES.SERVER_ERROR,
          axiosError.response.status || 500
        );
    }
  }

  // Axios 에러가 아닌 경우 일반적인 오류 처리
  console.error("알 수 없는 에러:", error);
  throw new AuthError(
    "예기치 못한 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.",
    AUTH_ERROR_CODES.SERVER_ERROR,
    500
  );
};

export default handleError;
