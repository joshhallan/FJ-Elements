import React from "react";
import styles from "./Section.module.css";

interface SectionProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  id?: string;
}

export const Section = ({
  children,
  size = "xl",
  className = "",
  id,
}: SectionProps) => {
  const sectionClasses = [styles.section, styles[`section--${size}`], className]
    .join(" ")
    .trim();

  return (
    <section id={id} className={sectionClasses}>
      <div className={styles.container}>{children}</div>
    </section>
  );
};
