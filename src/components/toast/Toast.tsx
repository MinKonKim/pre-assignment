import { useEffect, useState } from "react";
import { ToastType } from "../../types/toast";

interface ToastProps {
  toast: ToastType;
  onClose: () => void; // 애니메이션 종료 후 호출되는 콜백
}

const Toast = ({ toast, onClose }: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hideTimeout = setTimeout(() => {
      setIsVisible(false); // fadeOut 애니메이션 시작
    }, 3000); // 3초 후 fadeOut 시작

    const removeTimeout = setTimeout(() => {
      onClose(); // 완전히 제거
    }, 3500); // fadeOut 애니메이션 완료 후 onClose 호출

    return () => {
      clearTimeout(hideTimeout);
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
      className={`p-4 text-white rounded shadow-md max-w-xs mx-auto transition-all duration-500 
        ${getBackgroundColor()} 
        ${isVisible ? "animate-fadeIn" : "animate-fadeOut"}`}
    >
      {toast.message}
    </div>
  );
};

export default Toast;
