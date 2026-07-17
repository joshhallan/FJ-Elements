import React from "react";
import {
  FaInfoCircle,
  FaCheckCircle,
  FaExclamationTriangle,
  FaExclamationCircle,
  FaTimes,
} from "react-icons/fa";
import { Typography } from "../../typography";
import styles from "./Alert.module.css";

export type AlertIntent = "info" | "success" | "warning" | "error";

interface AlertProps {
  intent?: AlertIntent;
  title?: string;
  children: React.ReactNode;
  onDismiss?: () => void;
  className?: string;
}

const iconMap = {
  info: <FaInfoCircle aria-hidden="true" />,
  success: <FaCheckCircle aria-hidden="true" />,
  warning: <FaExclamationTriangle aria-hidden="true" />,
  error: <FaExclamationCircle aria-hidden="true" />,
};

export const Alert = ({
  intent = "info",
  title,
  children,
  onDismiss,
  className = "",
}: AlertProps) => {
  const role = intent === "error" || intent === "warning" ? "alert" : "status";

  return (
    <div
      className={`${styles.alert} ${styles[intent]} ${className}`.trim()}
      role={role}
      aria-atomic="true"
    >
      <div className={styles.icon}>{iconMap[intent]}</div>

      <div className={styles.content}>
        {title && (
          <Typography as="h4" className={styles.title}>
            {title}
          </Typography>
        )}

        <Typography as="p" className={styles.message}>
          {children}
        </Typography>
      </div>

      {onDismiss && (
        <button
          type="button"
          className={styles.closeButton}
          onClick={onDismiss}
          aria-label="Dismiss alert"
        >
          <FaTimes aria-hidden="true" />
        </button>
      )}
    </div>
  );
};
