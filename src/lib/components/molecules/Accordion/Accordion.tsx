import { useId, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
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

  const contentId = useId();

  return (
    <div className={`${styles.accordionWrapper} ${className}`.trim()}>
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((open) => !open)}
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

        <FaChevronDown
          className={`${styles.chevron} ${
            isOpen ? styles.chevronOpen : ""
          }`.trim()}
          aria-hidden="true"
        />
      </button>

      <div
        id={contentId}
        className={`${styles.content} ${isOpen ? styles.open : ""}`.trim()}
      >
        <div className={styles.innerContent}>{children}</div>
      </div>
    </div>
  );
};
