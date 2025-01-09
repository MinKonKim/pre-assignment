export type RegisterRequestType = {
  id: string;
  password: string;
  nickname: string;
};

export type RegisterResponse = {
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
  avatar: string;
  nickname: string;
};
