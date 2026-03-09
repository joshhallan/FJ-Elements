import React, { useEffect } from "react";
import { Alert, type AlertIntent } from "../alert/Alert";
import styles from "./Toast.module.css";

export interface ToastProps {
  id: string;
  intent?: AlertIntent;
  title?: string;
  message: string;
  duration?: number;
  onClose: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({
  id,
  intent = "info",
  title,
  message,
  duration = 5000,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => onClose(id), duration);
    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  return (
    <div className={styles.toastItem}>
      <Alert intent={intent} title={title} onDismiss={() => onClose(id)}>
        {message}
      </Alert>
    </div>
  );
};
