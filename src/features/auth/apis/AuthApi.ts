import axios, { AxiosInstance } from "axios";
import { API_URL } from "../config";
import {
  LoginRequestType,
  LoginResponseType,
  RegisterRequestType,
  RegisterResponseType,
} from "../types/api";

class AuthApi {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_URL,
    });
  }

  async register(data: RegisterRequestType): Promise<RegisterResponseType> {
    const response = await this.axiosInstance.post("/register", data);
    return response.data;
  }

  async login(data: LoginRequestType): Promise<LoginResponseType> {
    const response = await this.axiosInstance.post("/login", data);
    return response.data;
  }
}

export default new AuthApi();
