import { useEffect, useRef } from "react";

import { Alert, type AlertIntent } from "../Alert/Alert";

import styles from "./Toast.module.css";

export interface ToastProps {
  id: string;

  intent?: AlertIntent;

  title?: string;

  message: string;

  duration?: number;

  onClose: (id: string) => void;
}

export const Toast = ({
  id,
  intent = "info",
  title,
  message,
  duration = 5000,
  onClose,
}: ToastProps) => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startTimer = () => {
    timerRef.current = setTimeout(() => {
      onClose(id);
    }, duration);
  };

  const stopTimer = () => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    startTimer();

    return stopTimer;
  }, []);

  const role = intent === "error" ? "alert" : "status";

  return (
    <div
      className={styles.toastItem}
      role={role}
      aria-live={role === "alert" ? "assertive" : "polite"}
      onMouseEnter={stopTimer}
      onMouseLeave={startTimer}
      onFocus={stopTimer}
      onBlur={startTimer}
    >
      <Alert intent={intent} title={title} onDismiss={() => onClose(id)}>
        {message}
      </Alert>
    </div>
  );
};
