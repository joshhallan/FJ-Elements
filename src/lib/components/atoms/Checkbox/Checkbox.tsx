import React from "react";
import { Typography } from "../../typography";
import styles from "./Checkbox.module.css";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, label, error, className = "", ...props }, ref) => {
    const errorId = `${id}-error`;

    return (
      <div className={`${styles.wrapper} ${className}`}>
        <div className={styles.inputContainer}>
          <input
            ref={ref}
            id={id}
            type="checkbox"
            className={styles.hiddenInput}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            {...props}
          />
          <span className={styles.customCheck} aria-hidden="true" />

          <label htmlFor={id} className={styles.label}>
            <Typography as="span">{label}</Typography>
          </label>
        </div>

        {error && (
          <Typography as="small" className={styles.errorText}>
            {error}
          </Typography>
        )}
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";
