import React from "react";
import styles from "./Typography.module.css";

export interface TypographyProps {
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "small" | "span";
  children: React.ReactNode;
  glow?: boolean;
  gradient?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const Typography = ({
  as: Component = "p",
  children,
  glow = false,
  gradient = false,
  className = "",
  style,
}: TypographyProps) => {
  const classes = [
    styles.base,
    styles[Component],
    glow ? styles.glow : "",
    gradient ? styles.gradient : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} style={style}>
      {children}
    </Component>
  );
};
