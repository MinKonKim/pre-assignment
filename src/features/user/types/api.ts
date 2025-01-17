export type UserInfoType = {
  id: string;
  nickname: string;
  avatar: File | null;
  success: boolean;
};

export type ProfileRequestType = {
  avatar: File;
  nickname: string;
};

export type ProfileResponseType = {
  avatar: string;
  nickname: string;
  message: string;
  success: boolean;
};
