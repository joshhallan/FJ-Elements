import React from "react";
import styles from "./Skeleton.module.css";

interface SkeletonProps {
  variant?: "text" | "rect" | "circle";
  width?: string | number;
  height?: string | number;
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = "rect",
  width,
  height,
  className = "",
}) => {
  const containerClasses = `${styles.skeleton} ${styles[variant]} ${className}`;

  const style: React.CSSProperties = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  };

  return (
    <div
      className={containerClasses}
      style={style}
      aria-hidden="true"
      role="presentation"
    />
  );
};
