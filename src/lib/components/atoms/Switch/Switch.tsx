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
    return (
      <div className={`${styles.wrapper} ${className}`}>
        <label htmlFor={id} className={styles.container}>
          <input
            ref={ref}
            id={id}
            type="checkbox"
            role="switch"
            className={styles.hiddenInput}
            {...props}
          />

          <span className={styles.track}>
            <span className={styles.thumb} />
          </span>

          <Typography as="span" className={styles.label}>
            {label}
          </Typography>
        </label>

        {error && (
          <Typography as="small" className={styles.errorText}>
            {error}
          </Typography>
        )}
      </div>
    );
  },
);

Switch.displayName = "Switch";
