import { useContext } from "react";
import { ToastContext } from "../provider/ToastProvider";
import { ToastContextType } from "../types/toast";

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
