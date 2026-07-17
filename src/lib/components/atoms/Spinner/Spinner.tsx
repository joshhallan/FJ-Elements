import React from "react";
import styles from "./Spinner.module.css";

export interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  label?: string;
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  color = "secondary",
  label = "Loading",
  className = "",
}) => {
  return (
    <div
      className={`${styles.spinner} ${styles[size]} ${styles[color]} ${className}`.trim()}
      role="status"
    >
      <span className={styles.srOnly}>{label}</span>
    </div>
  );
};
