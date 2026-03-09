import { tokens } from "./styles/tokens";
import "./styles/reset.css";

export const injectTokens = () => {
  if (typeof document === "undefined") return;

  const root = document.documentElement;

  Object.entries(tokens.colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, value);
  });

  Object.entries(tokens.typography.size).forEach(([key, value]) => {
    root.style.setProperty(`--fs-${key}`, value);
  });

  Object.entries(tokens.effects).forEach(([key, value]) => {
    const cssKey = key.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
    root.style.setProperty(`--${cssKey}`, value);
  });
};

// Atoms
export * from "./components/atoms/Badge";
export * from "./components/atoms/Button";
export * from "./components/atoms/Checkbox";
export * from "./components/atoms/Divider";
export * from "./components/atoms/IconButton";
export * from "./components/atoms/Radio";
export * from "./components/atoms/Select";
export * from "./components/atoms/Spinner";
export * from "./components/atoms/Switch";
export * from "./components/atoms/TextArea";
export * from "./components/atoms/TextInput";
export * from "./components/atoms/Tooltip";

// molecules
export * from "./components/molecules/Accordion";
export * from "./components/molecules/Alert";
export * from "./components/molecules/Card";
export * from "./components/molecules/Nav";
export * from "./components/molecules/ProjectCard";
export * from "./components/molecules/Toast";

// organisms
export * from "./components/organisms/Modal";

// layout
export * from "./components/layout/Grid";
export * from "./components/layout/Section";

// typography
export * from "./components/typography";

// utils
export * from "./components/utils/skeleton";
