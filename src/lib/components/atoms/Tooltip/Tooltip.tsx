import React from "react";
import styles from "./Tooltip.module.css";

export interface TooltipProps {
  children: React.ReactNode;
  content: string;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = "top",
  className = "",
}) => {
  return (
    <div
      className={`${styles.tooltipWrapper} ${className}`}
      data-tooltip={content}
    >
      {children}
      <span className={`${styles.tooltipBox} ${styles[position]}`}>
        {content}
      </span>
    </div>
  );
};
