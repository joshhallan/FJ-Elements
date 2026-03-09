import React from "react";
import { tokens } from "../../../styles/tokens";
import styles from "./Grid.module.css";

interface CellProps {
  children: React.ReactNode;
  small?: number; // 0-12
  medium?: number; // 0-12
  large?: number; // 0-12
  gap?: keyof typeof tokens.spacing;
}

export const Cell = ({
  children,
  small = 12,
  medium,
  large,
  gap = "md",
}: CellProps) => {
  const style = {
    "--w-sm": `${(small / 12) * 100}%`,
    "--w-md": medium ? `${(medium / 12) * 100}%` : `${(small / 12) * 100}%`,
    "--w-lg": large
      ? `${(large / 12) * 100}%`
      : medium
        ? `${(medium / 12) * 100}%`
        : `${(small / 12) * 100}%`,
    padding: `calc(${tokens.spacing[gap]} / 2)`,
  } as React.CSSProperties;

  return (
    <div className={styles.cell} style={style}>
      {children}
    </div>
  );
};
