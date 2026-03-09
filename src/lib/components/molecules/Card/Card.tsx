import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
  variant?: "cyan" | "pink";
  className?: string;
}

export const Card = ({
  children,
  variant = "cyan",
  className = "",
}: CardProps) => {
  const variantClass = styles[`card--${variant}`];

  return (
    <div className={`${styles.card} ${variantClass} ${className}`}>
      {children}
    </div>
  );
};

/* --- Compound Sub-Components --- */

const CardHeader = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`${styles.cardHeader} ${className}`}>{children}</div>;

const CardBody = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`${styles.cardBody} ${className}`}>{children}</div>;

const CardFooter = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={`${styles.cardFooter} ${className}`}>{children}</div>;

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
