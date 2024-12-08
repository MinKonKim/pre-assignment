import { Toast as ToastType } from "../../types/toast";

interface ToastProps {
  toast: ToastType;
}

const Toast = ({ toast }: ToastProps) => {
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
    <div className={`p-4 text-white rounded shadow ${getBackgroundColor()}`}>
      {toast.message}
    </div>
  );
};

export default Toast;
