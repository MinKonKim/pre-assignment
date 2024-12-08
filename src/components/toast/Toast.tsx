import { useEffect, useState } from "react";
import { Toast as ToastType } from "../../types/toast";

interface ToastProps {
  toast: ToastType;
  onClose: () => void; // 퇴장 시 콜백 함수
}

const Toast = ({ toast, onClose }: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true);

  // 3초 후 퇴장 애니메이션 시작
  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(false), 3000);
    const removeTimeout = setTimeout(onClose, 3500); // 애니메이션 후 완전 제거
    return () => {
      clearTimeout(timeout);
      clearTimeout(removeTimeout);
    };
  }, [onClose]);

  const getBackgroundColor = () => {
    switch (toast.type) {
      case "success":
        return "bg-green-500";
      case "error":
        return "bg-red-500";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <div
      className={`p-4 text-white rounded shadow-md max-w-xs mx-auto transition-all duration-500 ${
        isVisible ? "animate-fadeIn" : "animate-fadeOut"
      } ${getBackgroundColor()}`}
    >
      {toast.message}
    </div>
  );
};

export default Toast;
