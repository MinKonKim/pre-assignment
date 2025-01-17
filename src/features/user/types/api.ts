export type UserInfoType = {
  id: string;
  nickanme: string;
  avatar: File | null;
  success: boolean;
};

export type ProfileRequestType = {
  avatar: File | null;
  nickname: string;
};

export type ProfileResponseType = {
  avatar: string;
  nickname: string;
  message: string;
  success: boolean;
};
