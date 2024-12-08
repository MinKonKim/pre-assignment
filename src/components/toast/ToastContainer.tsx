import { useState } from "react";
import { Toast as ToastType } from "../../types/toast";
import Toast from "./Toast";

const ToastContainer = () => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const addToast = (message: string, type: "success" | "error" | "info") => {
    const id = Date.now().toString();
    setToasts([...toasts, { id, message, type }]);
  };

  const removeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <div className="fixed bottom-4 right-4 space-y-4 z-50">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          toast={toast}
          onClose={() => removeToast(toast.id)}
        />
      ))}
      <button
        onClick={() => addToast("Hello, this is a success toast!", "success")}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Show Toast
      </button>
    </div>
  );
};

export default ToastContainer;
