import React from "react";
import { tokens } from "../../../styles/tokens";

export const Container = ({
  children,
  maxWidth = "1200px",
  className,
}: {
  children: React.ReactNode;
  maxWidth?: string;
  className?: string;
}) => (
  <div
    style={{
      maxWidth,
      margin: "0 auto",
      padding: `0 ${tokens.spacing.lg}`,
      width: "100%",
      boxSizing: "border-box",
    }}
    className={className}
  >
    {children}
  </div>
);
