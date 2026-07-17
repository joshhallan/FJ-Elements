import React from "react";
import styles from "./Button.module.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button = ({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${styles.btn} ${styles[`btn--${variant}`]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
