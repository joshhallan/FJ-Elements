import React from "react";
import { Typography } from "../../typography";
import styles from "./RadioGroup.module.css";

interface RadioGroupProps {
  label: string;
  name: string;
  children: React.ReactNode;
  error?: string;
  className?: string;
}

export const RadioGroup = ({
  label,
  name,
  children,
  error,
  className = "",
}: RadioGroupProps) => {
  const errorId = `${name}-error`;

  return (
    <fieldset
      className={`${styles.groupWrapper} ${className}`}
      aria-describedby={error ? errorId : undefined}
    >
      <legend>
        <Typography as="small" className={styles.legend}>
          {label}
        </Typography>
      </legend>

      <div className={styles.childrenContainer}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { name } as any);
          }
          return child;
        })}
      </div>

      {error && (
        <Typography as="small" className={styles.errorText}>
          {error}
        </Typography>
      )}
    </fieldset>
  );
};
