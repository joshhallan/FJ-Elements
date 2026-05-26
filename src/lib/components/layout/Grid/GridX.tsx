import React from "react";
import { tokens } from "../../../styles/tokens";

interface GridXProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  gap?: keyof typeof tokens.spacing;
  align?: "start" | "center" | "end" | "justify" | "spaced";
  className?: string;
  style?: React.CSSProperties;
}

export const GridX = ({
  children,
  gap = "md",
  align = "start",
  className = "",
  style: externalStyle = {},
  ...props
}: GridXProps) => {
  const alignmentMap = {
    start: "flex-start",
    center: "center",
    end: "flex-end",
    justify: "space-between",
    spaced: "space-around",
  };

  const internalStyle = {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: alignmentMap[align],
    margin: `calc(${tokens.spacing[gap]} / -2)`,
    width: `calc(100% + ${tokens.spacing[gap]})`,
  } as React.CSSProperties;

  const combinedStyles = {
    ...internalStyle,
    ...externalStyle,
  };

  return (
    <div className={className.trim()} style={combinedStyles} {...props}>
      {children}
    </div>
  );
};
