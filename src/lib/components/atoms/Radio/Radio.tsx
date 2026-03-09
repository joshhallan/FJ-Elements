import React from "react";
import { Typography } from "../../typography";
import styles from "./Radio.module.css";

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ id, label, className = "", ...props }, ref) => {
    return (
      <div className={`${styles.wrapper} ${className}`}>
        <label htmlFor={id} className={styles.inputContainer}>
          <input
            ref={ref}
            id={id}
            type="radio"
            className={styles.hiddenInput}
            {...props}
          />
          <span className={styles.customRadio} aria-hidden="true" />

          <Typography as="span" className={styles.labelText}>
            {label}
          </Typography>
        </label>
      </div>
    );
  },
);

Radio.displayName = "Radio";
