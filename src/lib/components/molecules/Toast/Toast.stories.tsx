import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ToastProvider } from "./ToastProvider";
import { useToast } from "./UseToast";
import type { ToastPosition } from "./ToastProvider";

const ToastTrigger = ({ position }: { position: ToastPosition }) => {
  const { addToast } = useToast();

  const handleTrigger = (intent: "success" | "error" | "warning" | "info") => {
    addToast({
      intent,
      title: `${intent.toUpperCase()} EVENT`,
      message: `System notification triggered for ${position} alignment.`,
      duration: 4000,
    });
  };

  return (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <button className="fj-demo-btn" onClick={() => handleTrigger("success")}>
        Success
      </button>
      <button className="fj-demo-btn" onClick={() => handleTrigger("error")}>
        Error
      </button>
      <button className="fj-demo-btn" onClick={() => handleTrigger("warning")}>
        Warning
      </button>
      <button className="fj-demo-btn" onClick={() => handleTrigger("info")}>
        Info
      </button>

      <style>{`
        .fj-demo-btn {
          background: var(--color-surface);
          color: var(--color-white);
          border: 1px solid var(--color-accent);
          padding: var(--spacing-sm) var(--spacing-md);
          border-radius: var(--radius-sm);
          cursor: pointer;
          font-family: var(--font-sans);
          transition: var(--transition-base);
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.05em;
        }
        .fj-demo-btn:hover {
          box-shadow: var(--glow-cyan);
          border-color: var(--color-secondary);
        }
      `}</style>
    </div>
  );
};

const meta: Meta = {
  title: "FJ-elements/Molecules/Toast",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const TopRight: StoryObj = {
  render: () => (
    <ToastProvider position="top-right">
      <div style={{ textAlign: "center" }}>
        <p style={{ color: "var(--color-textMuted)", marginBottom: "1rem" }}>
          Click to test Top-Right stacking
        </p>
        <ToastTrigger position="top-right" />
      </div>
    </ToastProvider>
  ),
};

export const BottomLeft: StoryObj = {
  render: () => (
    <ToastProvider position="bottom-left">
      <div style={{ textAlign: "center" }}>
        <p style={{ color: "var(--color-textMuted)", marginBottom: "1rem" }}>
          Click to test Bottom-Left stacking (Reverse)
        </p>
        <ToastTrigger position="bottom-left" />
      </div>
    </ToastProvider>
  ),
};

export const AllPositionsDemo: StoryObj = {
  render: () => {
    const [currentPos, setCurrentPos] =
      React.useState<ToastPosition>("top-right");

    return (
      <ToastProvider position={currentPos} key={currentPos}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {(
              [
                "top-left",
                "top-right",
                "bottom-left",
                "bottom-right",
              ] as ToastPosition[]
            ).map((p) => (
              <button
                key={p}
                onClick={() => setCurrentPos(p)}
                style={{
                  opacity: currentPos === p ? 1 : 0.5,
                  padding: "4px 8px",
                  cursor: "pointer",
                }}
              >
                {p}
              </button>
            ))}
          </div>
          <ToastTrigger position={currentPos} />
        </div>
      </ToastProvider>
    );
  },
};
