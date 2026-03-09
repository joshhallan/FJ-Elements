import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  href?: string;
  download?: boolean | string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  href,
  download,
  onClick,
  children,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) => {
  const variantClass = styles[`btn--${variant}`];
  const combinedClasses = `${styles.btn} ${variantClass} ${className}`.trim();

  const commonProps = {
    className: combinedClasses,
    onClick,
  };

  if (href) {
    return (
      <a href={href} download={download} {...commonProps}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} {...commonProps}>
      {children}
    </button>
  );
};
