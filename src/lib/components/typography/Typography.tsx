import React from "react";
import styles from "./Typography.module.css";

export interface TypographyProps extends React.HTMLAttributes<
  HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement
> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small" | "span";

  children: React.ReactNode;

  weight?: "regular" | "medium" | "semibold" | "bold" | "extrabold";

  align?: "left" | "center" | "right";

  glow?: boolean;

  gradient?: boolean;
}

export const Typography = ({
  as: Component = "p",
  children,
  weight,
  align,
  glow = false,
  gradient = false,
  className = "",
  ...props
}: TypographyProps) => {
  const classes = [
    styles.base,
    styles[Component],

    weight
      ? styles[`weight${weight.charAt(0).toUpperCase()}${weight.slice(1)}`]
      : "",

    align
      ? styles[`align${align.charAt(0).toUpperCase()}${align.slice(1)}`]
      : "",

    glow ? styles.glow : "",

    gradient ? styles.gradient : "",

    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};
