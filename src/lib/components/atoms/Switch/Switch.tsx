import React from "react";
import { Typography } from "../../typography";
import styles from "./Switch.module.css";

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ id, label, error, className = "", ...props }, ref) => {
    const errorId = `${id}-error`;

    return (
      <div className={`${styles.wrapper} ${className}`.trim()}>
        <label htmlFor={id} className={styles.container}>
          <input
            {...props}
            ref={ref}
            id={id}
            type="checkbox"
            role="switch"
            className={styles.hiddenInput}
            aria-describedby={error ? errorId : undefined}
            aria-invalid={error ? "true" : undefined}
          />

          <span className={styles.track} aria-hidden="true">
            <span className={styles.thumb} />
          </span>

          <Typography as="span" className={styles.label}>
            {label}
          </Typography>
        </label>

        {error && (
          <div id={errorId}>
            <Typography as="small" className={styles.errorText}>
              {error}
            </Typography>
          </div>
        )}
      </div>
    );
  },
);

Switch.displayName = "Switch";
