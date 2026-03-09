import React from "react";
import styles from "./IconButton.module.css";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  label: string;
  className?: string;
  as?: "button" | "a";
  href?: string;
}

export const IconButton = ({
  icon,
  variant = "ghost",
  size = "md",
  label,
  className = "",
  as = "button",
  ...props
}: IconButtonProps) => {
  const Component = as as any;
  const combinedClassName = `${styles.iconButton} ${styles[variant]} ${styles[size]} ${className}`;

  return (
    <Component
      className={combinedClassName}
      aria-label={label}
      title={label}
      {...props}
    >
      <span className={styles.iconWrapper}>{icon}</span>
    </Component>
  );
};
