import { useToast } from "../../hooks/useToast";
import Toast from "./Toast";

const ToastContainer = () => {
  const { toasts } = useToast();

  return (
    <div className="fixed bottom-4 right-4 space-y-2 z-50">
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </div>
  );
};

export default ToastContainer;
