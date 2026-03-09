import React from "react";
import { Typography } from "../../typography/";
import styles from "./TextInput.module.css";

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
  showRequiredIndicator?: boolean;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    { id, label, error, showRequiredIndicator, className = "", ...props },
    ref,
  ) => {
    const errorId = `${id}-error`;
    const isRequired = showRequiredIndicator || props.required;

    return (
      <div className={styles.fieldWrapper}>
        <label htmlFor={id}>
          <Typography as="small" className={styles.label}>
            {label}
            {isRequired && (
              <span className={styles.requiredMarker} aria-hidden="true">
                {" "}
                *
              </span>
            )}
          </Typography>
        </label>

        <div className={styles.inputContainer}>
          <input
            ref={ref}
            id={id}
            className={`${styles.input} ${error ? styles.errorState : ""} ${className}`}
            aria-invalid={!!error}
            aria-describedby={error ? errorId : undefined}
            {...props}
          />
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

TextInput.displayName = "TextInput";
