// 회원가입 요청 데이터 타입
export interface RegisterRequest {
  id: string;
  password: string;
  nickname: string;
}

// 로그인 요청 데이터 타입
export interface LoginRequest {
  id: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  userId: string;
  avatar: string | null;
  nickname: string;
  success: boolean;
}

// 회원정보 응답 타입
export interface UserInfoResponse {
  id: string;
  nickname: string;
  avatar: string | null;
  success: boolean;
}

// 프로필 변경 요청 데이터 타입
export interface UpdateProfileRequest {
  avatar?: File;
  nickname: string;
}

export interface UpdateProfileResponse {
  avatar: string | null;
  nickname: string;
  message: string;
  success: boolean;
}
