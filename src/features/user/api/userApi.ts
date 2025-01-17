import axios, { AxiosInstance } from "axios";
import Cookies from "js-cookie";
import { API_URL } from "../../auth/config";
import {
  ProfileRequestType,
  ProfileResponseType,
  UserInfoType,
} from "../types";

class UserApi {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_URL,
    });
  }

  async getUserProfile(): Promise<UserInfoType> {
    const accessToken = Cookies.get("accessToken");
    const response = await this.axiosInstance.get("/user", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  }
  async UpdateProfile(data: ProfileRequestType): Promise<ProfileResponseType> {
    const formData = new FormData();
    formData.append("nickname", data.nickname);
    formData.append("avatar", data.avatar);
    const accessToken = Cookies.get("accessToken");
    const response = await this.axiosInstance.put("/user", formData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  }
}

export default new UserApi();
