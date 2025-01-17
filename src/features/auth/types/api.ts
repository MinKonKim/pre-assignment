export type RegisterRequestType = {
  id: string;
  password: string;
  nickname: string;
};

export type RegisterResponseType = {
  message: string;
  success: boolean;
};

export type LoginRequestType = {
  id: string;
  password: string;
  expiresIn?: string; //10s 10m 10h
};

export type LoginResponseType = {
  accessToken: string;
  userId: string;
  success: boolean;
  avatar: File | null;
  nickname: string;
  message?: string;
};

export type UserStorageType = Pick<LoginResponseType, "accessToken" | "userId">;
