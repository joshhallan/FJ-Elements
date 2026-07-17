import React, { useState, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import { Toast } from "./Toast";
import type { ToastProps } from "./Toast";
import styles from "./Toast.module.css";
import { ToastContext, type ToastPosition } from "./ToastContext";

interface ToastProviderProps {
  children: React.ReactNode;
  position?: ToastPosition;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  position = "top-right",
}) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const addToast = useCallback(
    (toast: Omit<ToastProps, "id" | "onClose">) => {
      const id = crypto.randomUUID();
      setToasts((prev) => [...prev, { ...toast, id, onClose: removeToast }]);
    },
    [removeToast],
  );

  const value = useMemo(
    () => ({ addToast, removeToast }),
    [addToast, removeToast],
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      {createPortal(
        <div
          className={`${styles.toastContainer} ${styles[position]}`}
          aria-label="Notifications"
          aria-live="polite"
          aria-relevant="additions"
        >
          {" "}
          {toasts.map((toast) => (
            <Toast key={toast.id} {...toast} />
          ))}
        </div>,
        document.body,
      )}
    </ToastContext.Provider>
  );
};
