import Cookies from "js-cookie";
import { AuthAPI } from "../apis";
import useAuthStore from "../stores/useAuthStore";
import { LoginRequestType, RegisterRequestType } from "../types/api";
import { validateLoginData, validateRegisterData } from "../utils/validate";

class AuthService {
  async register(data: RegisterRequestType) {
    const validate = validateRegisterData(data);
    if (!validate?.success) {
      return validate;
    }
    return await AuthAPI.register(data);
  }

  async login(data: LoginRequestType) {
    const validate = validateLoginData(data);
    if (!validate?.success) {
      return validate;
    }

    const response = await AuthAPI.login(data);
    if (response.accessToken) {
      Cookies.set("accessToken", response.accessToken, {
        expires: 7,
      });
      useAuthStore.getState().setUser({ ...response });
    }
    return response;
  }

  logout() {
    Cookies.remove("accessToken");
    useAuthStore.getState().clearUser();
  }
}

export default new AuthService();
