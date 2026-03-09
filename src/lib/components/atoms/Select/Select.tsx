import React from "react";
import { Typography } from "../../typography";
import styles from "./Select.module.css";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label: string;
  options: SelectOption[];
  error?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ id, label, options, error, className = "", ...props }, ref) => {
    return (
      <div className={`${styles.wrapper} ${className}`}>
        <label htmlFor={id}>
          <Typography className={styles.label}>{label}</Typography>
        </label>

        <div className={styles.selectContainer}>
          <select ref={ref} id={id} className={styles.select} {...props}>
            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className={styles.option}
              >
                {option.label}
              </option>
            ))}
          </select>
          <span className={styles.chevron} aria-hidden="true">
            ▼
          </span>
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

Select.displayName = "Select";
