import axios, { AxiosInstance } from "axios";
import { API_URL } from "../config";
import {
  LoginRequestType,
  LoginResponseType,
  RegisterRequestType,
  RegisterResponseType,
} from "../types/api";
import handleError from "../utils/authError";

class AuthApi {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_URL,
    });
  }

  async register(data: RegisterRequestType): Promise<RegisterResponseType> {
    try {
      const response = await this.axiosInstance.post("/register", data);
      if (response.status === 200) {
        return response.data;
      }
      throw new Error("Register failed");
    } catch (error) {
      throw handleError(error);
    }
  }

  async login(data: LoginRequestType): Promise<LoginResponseType> {
    try {
      const response = await this.axiosInstance.post("/login", data);
      if (response.status === 200) {
        return response.data;
      }
      throw new Error("Login failed");
    } catch (error) {
      throw handleError(error);
    }
  }
}

export default new AuthApi();
