import React from "react";
import { Typography } from "../../typography";
import styles from "./Select.module.css";
import { FaChevronDown } from "react-icons/fa6";

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
    const errorId = `${id}-error`;

    return (
      <div className={`${styles.wrapper} ${className}`.trim()}>
        <label htmlFor={id}>
          <Typography className={styles.label}>{label}</Typography>
        </label>

        <div className={styles.selectContainer}>
          <select
            {...props}
            ref={ref}
            id={id}
            className={styles.select}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <FaChevronDown className={styles.chevron} aria-hidden="true" />
        </div>

        {error && (
          <div id={errorId} role="alert">
            <Typography as="small" className={styles.errorText}>
              {error}
            </Typography>
          </div>
        )}
      </div>
    );
  },
);

Select.displayName = "Select";
