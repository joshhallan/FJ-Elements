import React from "react";
import styles from "./IconLink.module.css";

export interface IconLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: React.ReactNode;
  label: string;
  size?: "sm" | "md" | "lg";
}

export const IconLink = ({
  icon,
  label,
  size = "md",
  className = "",
  ...props
}: IconLinkProps) => {
  return (
    <a
      {...props}
      aria-label={label}
      className={`${styles.iconLink} ${styles[size]} ${className}`.trim()}
    >
      {icon}
    </a>
  );
};
