import React from "react";
import { tokens } from "../../../styles/tokens";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  gap?: keyof typeof tokens.spacing;
}

export const Grid = ({
  children,
  gap = "md",
  className = "",
  ...props
}: GridProps) => {
  return (
    <div
      className={`grid-x ${className}`.trim()}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        gap: tokens.spacing[gap],
      }}
      {...props}
    >
      {children}
    </div>
  );
};
