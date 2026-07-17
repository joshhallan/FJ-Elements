import React from "react";
import styles from "./Cell.module.css"; // Import the module

interface CellProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  small?: number;
  medium?: number;
  large?: number;
}

export const Cell = ({
  children,
  small = 12,
  medium,
  large,
  className = "",
  ...props
}: CellProps) => {
  return (
    <div
      className={`${styles.cell} ${className}`.trim()}
      style={
        {
          "--col-sm": `span ${small}`,
          "--col-md": medium ? `span ${medium}` : "var(--col-sm)",
          "--col-lg": large ? `span ${large}` : "var(--col-md, var(--col-sm))",
        } as React.CSSProperties
      }
      {...props}
    >
      {children}
    </div>
  );
};
