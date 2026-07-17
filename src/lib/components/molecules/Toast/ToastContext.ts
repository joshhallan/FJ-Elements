import { createContext } from "react";
import type { ToastProps } from "./Toast";

export type ToastPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export interface ToastContextType {
  addToast: (toast: Omit<ToastProps, "id" | "onClose">) => void;
  removeToast: (id: string) => void;
}

export const ToastContext = createContext<ToastContextType | undefined>(
  undefined,
);
