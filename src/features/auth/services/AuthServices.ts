import { AuthAPI } from "../apis";
import { LoginRequestType, RegisterRequestType } from "../types/api";
import {
  getUserFromStorage,
  removeUserFromStorage,
  setUserToStorage,
} from "../utils";
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
      setUserToStorage(response);
    }
    return response;
  }

  async checkAuth() {
    const user = getUserFromStorage();
    console.log(user);
    return user ? true : false;
  }

  logout() {
    removeUserFromStorage();
  }
}

export default new AuthService();
