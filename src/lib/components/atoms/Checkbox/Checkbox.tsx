import React from "react";
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
      <div className={`${styles.wrapper} ${className}`.trim()}>
        <div className={styles.inputContainer}>
          <input
            {...props}
            ref={ref}
            id={id}
            type="checkbox"
            className={styles.hiddenInput}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? errorId : undefined}
          />

          <span className={styles.customCheck} aria-hidden="true" />

          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        </div>

        {error && (
          <span id={errorId} className={styles.errorText}>
            {error}
          </span>
        )}
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";
