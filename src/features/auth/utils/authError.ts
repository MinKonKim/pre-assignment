import axios, { AxiosError } from "axios";
import { AUTH_ERROR_CODES, AuthError } from "../types/error";

const handleError = (error: unknown): never => {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<{ message: string }>;

    switch (axiosError.response?.status) {
      case 400:
        throw new AuthError(
          "Invalid username or password",
          AUTH_ERROR_CODES.INVALID_INPUT,
          400
        );
      case 401:
        throw new AuthError(
          "Incorrect credentials",
          AUTH_ERROR_CODES.INVALID_CREDENTIALS,
          401
        );
      case 403:
        throw new AuthError(
          "Account is locked",
          AUTH_ERROR_CODES.ACCOUNT_LOCKED,
          403
        );
      case 500:
        throw new AuthError(
          "Server error occurred",
          AUTH_ERROR_CODES.SERVER_ERROR,
          500
        );
      default:
        if (!axiosError.response) {
          throw new AuthError(
            "Network error occurred",
            AUTH_ERROR_CODES.NETWORK_ERROR,
            0
          );
        }
        throw new AuthError(
          "An unexpected error occurred",
          AUTH_ERROR_CODES.SERVER_ERROR,
          axiosError.response.status
        );
    }
  }

  throw new AuthError(
    "An unexpected error occurred",
    AUTH_ERROR_CODES.SERVER_ERROR,
    500
  );
};
export default handleError;
