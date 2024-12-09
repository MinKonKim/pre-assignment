export interface ApiResponse<T> {
  success: boolean; // 성공 여부
  message: string; // 응답 메시지
  data?: T; // 성공 시 반환되는 데이터 (선택적)
}
