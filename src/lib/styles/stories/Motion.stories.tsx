import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

const meta: Meta = {
  title: "FJ-Elements/Foundation/Motion",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj;

const TransitionCard = ({
  title,
  token,
  description,
}: {
  title: string;
  token: string;
  description: string;
}) => {
  const [active, setActive] = useState(false);

  return (
    <div
      style={{
        padding: "2rem",
        borderRadius: "var(--radius-lg)",
        background: "var(--color-surface)",
        border: "1px solid var(--color-border-default)",
      }}
    >
      <h2
        style={{
          color: "var(--color-text-primary)",
          marginBottom: "0.5rem",
        }}
      >
        {title}
      </h2>

      <p
        style={{
          color: "var(--color-text-muted)",
          marginBottom: "1.5rem",
        }}
      >
        {description}
      </p>

      <button
        onClick={() => setActive(!active)}
        style={{
          padding: "0.75rem 1.5rem",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-control-border)",
          background: active
            ? "var(--color-action-secondary)"
            : "var(--color-control-background)",
          color: "var(--color-text-primary)",
          cursor: "pointer",
          transition: `var(${token})`,
        }}
      >
        Toggle state
      </button>

      <div
        style={{
          marginTop: "2rem",
          width: "100px",
          height: "100px",
          borderRadius: "var(--radius-md)",
          background: "var(--color-decoration-primary)",
          transform: active ? "translateX(200px)" : "translateX(0)",
          transition: `transform var(${token})`,
        }}
      />

      <code
        style={{
          display: "block",
          marginTop: "1.5rem",
          color: "var(--color-text-muted)",
        }}
      >
        {token}
      </code>
    </div>
  );
};

export const Transitions: Story = {
  render: () => (
    <main
      style={{
        padding: "3rem",
        maxWidth: "900px",
        minHeight: "100vh",
        background: "var(--color-background)",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <div>
        <h1
          style={{
            color: "var(--color-text-primary)",
            marginBottom: "0.5rem",
          }}
        >
          Motion Tokens
        </h1>

        <p
          style={{
            color: "var(--color-text-muted)",
          }}
        >
          Motion tokens provide consistent timing and easing behaviour across
          components. Use fast transitions for small UI feedback and base
          transitions for larger state changes.
        </p>
      </div>

      <TransitionCard
        title="Fast Transition"
        token="--transition-fast"
        description="Used for small interactions such as button states, focus changes and subtle feedback."
      />

      <TransitionCard
        title="Base Transition"
        token="--transition-base"
        description="Used for larger component state changes such as menus, panels and content movement."
      />
    </main>
  ),
};
