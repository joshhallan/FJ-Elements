import React from "react";
import {
  FaInfoCircle,
  FaCheckCircle,
  FaExclamationTriangle,
  FaExclamationCircle,
  FaTimes,
} from "react-icons/fa";
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

export const Alert: React.FC<AlertProps> = ({
  intent = "info",
  title,
  children,
  onDismiss,
  className = "",
}) => {
  const role = intent === "error" || intent === "warning" ? "alert" : "status";
  const containerClasses = `${styles.alert} ${styles[intent]} ${className}`;

  return (
    <div className={containerClasses} role={role} aria-atomic="true">
      <div className={styles.icon}>{iconMap[intent]}</div>

      <div className={styles.content}>
        {title && <h4 className={styles.title}>{title}</h4>}
        <div className={styles.message}>{children}</div>
      </div>

      {onDismiss && (
        <button
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
