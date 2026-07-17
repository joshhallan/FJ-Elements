import React from "react";
import styles from "./Link.module.css";
import { FaExternalLinkAlt } from "react-icons/fa";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
  isExternal?: boolean;
}

export const Link = ({
  children,
  variant = "primary",
  className = "",
  isExternal = false,
  ...props
}: LinkProps) => {
  return (
    <a
      {...props}
      className={`${styles.link} ${styles[`link--${variant}`]} ${className}`.trim()}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}

      {isExternal && (
        <>
          <FaExternalLinkAlt
            className={styles.externalIcon}
            aria-hidden="true"
          />
          <span className={styles.visuallyHidden}> (opens in a new tab)</span>
        </>
      )}
    </a>
  );
};
