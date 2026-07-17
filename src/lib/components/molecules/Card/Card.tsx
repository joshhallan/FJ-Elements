import React from "react";
import styles from "./Card.module.css";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "cyan" | "pink";
}

export const Card = ({
  children,
  variant = "cyan",
  className = "",
  ...props
}: CardProps) => {
  return (
    <div
      {...props}
      className={`${styles.card} ${styles[`card--${variant}`]} ${className}`.trim()}
    >
      {children}
    </div>
  );
};

/* ==========================================================
   Sub Components
========================================================== */

interface CardSectionProps {
  children: React.ReactNode;
  className?: string;
}

const CardHeader = ({ children, className = "" }: CardSectionProps) => (
  <div className={`${styles.cardHeader} ${className}`}>{children}</div>
);

const CardBody = ({ children, className = "" }: CardSectionProps) => (
  <div className={`${styles.cardBody} ${className}`}>{children}</div>
);

const CardFooter = ({ children, className = "" }: CardSectionProps) => (
  <div className={`${styles.cardFooter} ${className}`}>{children}</div>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
