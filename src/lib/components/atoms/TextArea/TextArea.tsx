import React from "react";
import { Typography } from "../../typography";
import styles from "./TextArea.module.css";

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  error?: string;
  showRequiredIndicator?: boolean;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      id,
      label,
      error,
      showRequiredIndicator,
      className = "",
      rows = 4,
      ...props
    },
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
          <textarea
            ref={ref}
            id={id}
            rows={rows}
            className={`${styles.textarea} ${error ? styles.errorState : ""} ${className}`}
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

TextArea.displayName = "TextArea";
