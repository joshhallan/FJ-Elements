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

interface RadioInjectableProps {
  name: string;
}

export const RadioGroup = ({
  label,
  name,
  children,
  error,
  className = "",
}: RadioGroupProps) => {
  const errorId = `${name}-error`;
  const wrapperClasses =
    `${styles.groupWrapper} ${error ? styles.hasError : ""} ${className}`.trim();

  return (
    <fieldset
      className={wrapperClasses}
      aria-describedby={error ? errorId : undefined}
      aria-invalid={!!error}
    >
      <legend>
        <Typography as="span" className={styles.legend}>
          {label}
        </Typography>
      </legend>

      <div className={styles.childrenContainer}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement<RadioInjectableProps>(child)) {
            return React.cloneElement(child, { name });
          }
          return child;
        })}
      </div>

      {error && (
        <div id={errorId}>
          <Typography as="small" className={styles.errorText}>
            {error}
          </Typography>
        </div>
      )}
    </fieldset>
  );
};
