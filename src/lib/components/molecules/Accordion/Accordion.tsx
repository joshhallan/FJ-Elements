import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Typography } from "../../typography";
import styles from "./Accordion.module.css";

export interface AccordionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

export const Accordion = ({
  title,
  subtitle,
  children,
  defaultOpen = false,
  className = "",
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`${styles.accordionWrapper} ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.toggle}
        aria-expanded={isOpen}
      >
        <div className={styles.info}>
          <Typography as="h4" className={styles.title}>
            {title}
          </Typography>
          {subtitle && (
            <Typography as="small" className={styles.subtitle}>
              {subtitle}
            </Typography>
          )}
        </div>
        <span className={styles.chevron}>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>

      <div className={`${styles.content} ${isOpen ? styles.open : ""}`}>
        <div className={styles.innerContent}>{children}</div>
      </div>
    </div>
  );
};
