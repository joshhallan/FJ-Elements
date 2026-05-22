import styles from "./Divider.module.css";

export interface DividerProps {
  variant?: "primary" | "secondary" | "accent";
  className?: string;
}

export const Divider = ({
  variant = "primary",
  className = "",
}: DividerProps) => {
  const variantClass = styles[`divider--${variant}`];

  return (
    <hr
      className={`${styles.divider} ${variantClass} ${className}`}
      aria-hidden="true"
    />
  );
};
