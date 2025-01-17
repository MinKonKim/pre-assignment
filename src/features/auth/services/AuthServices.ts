import Cookies from "js-cookie";
import { AuthAPI } from "../apis";
import { LoginRequestType, RegisterRequestType } from "../types/api";
import { removeUserFromStorage } from "../utils";
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
      Cookies.set("accessToken", response.accessToken, { expires: 7 }); // 7일간 유지
    }
    return response;
  }

  checkAuth() {
    const user = Cookies.get("accessToken");
    return user ? true : false;
  }

  logout() {
    removeUserFromStorage();
  }
}

export default new AuthService();
