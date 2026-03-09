import React from "react";
import { tokens } from "../../../styles/tokens";

interface GridXProps {
  children: React.ReactNode;
  gap?: keyof typeof tokens.spacing;
  align?: "start" | "center" | "end" | "justify" | "spaced";
}

export const GridX = ({
  children,
  gap = "md",
  align = "start",
}: GridXProps) => {
  const alignmentMap = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    justify: "space-between",
    spaced: "space-around",
  };

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: alignmentMap[align],
        margin: `calc(${tokens.spacing[gap]} / -2)`,
        width: `calc(100% + ${tokens.spacing[gap]})`,
      }}
    >
      {children}
    </div>
  );
};
