import React, { useId } from "react";
import styles from "./Tooltip.module.css";

export interface TooltipProps {
  children: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
  content: string;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
}

export const Tooltip = ({
  children,
  content,
  position = "top",
  className = "",
}: TooltipProps) => {
  const tooltipId = useId();

  return (
    <div className={`${styles.tooltipWrapper} ${className}`.trim()}>
      {React.cloneElement(children, {
        "aria-describedby": tooltipId,
      })}

      <span
        id={tooltipId}
        role="tooltip"
        className={`${styles.tooltipBox} ${styles[position]}`}
      >
        {content}
      </span>
    </div>
  );
};
