import styles from "./Divider.module.css";

export interface DividerProps {
  variant?: "primary" | "secondary" | "accent";
  className?: string;
}

const variantClasses = {
  primary: styles["divider--primary"],
  secondary: styles["divider--secondary"],
  accent: styles["divider--accent"],
};

export const Divider = ({
  variant = "primary",
  className = "",
}: DividerProps) => {
  return (
    <hr
      className={`${styles.divider} ${variantClasses[variant]} ${className}`}
      aria-hidden="true"
    />
  );
};
