export interface ToastType {
  id: string;
  type: "success" | "error" | "info";
  message: string;
  duration?: number; // 지속 시간 (기본값: 3초)
}

export interface ToastContextType {
  addToast: (
    message: string,
    type: "success" | "error" | "info",
    duration?: number
  ) => void;
}
