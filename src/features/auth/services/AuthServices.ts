import { AuthAPI } from "../apis";
import { LoginRequestType, RegisterRequestType } from "../types/api";
import { validateLoginData, validateRegisterData } from "../utils/validate";

class AuthService {
  async register(data: RegisterRequestType) {
    const validate = validateRegisterData(data);
    if (!validate?.success) {
      return validate;
    }

    return AuthAPI.register(data);
  }

  async login(data: LoginRequestType) {
    const validate = validateLoginData(data);
    if (!validate?.success) {
      return validate;
    }

    const response = await AuthAPI.login(data);
    if (response.accessToken) {
      localStorage.setItem("user", JSON.stringify(response));
    }
    return response;
  }

  async checkAuth() {
    const user = localStorage.getItem("user");
    return user ? true : false;
  }

  logout() {
    localStorage.removeItem("user");
  }
}

export default new AuthService();
