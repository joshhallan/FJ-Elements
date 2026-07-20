import type { Meta, StoryObj } from "@storybook/react-vite";

const SpacingBlock = ({ label, token }: { label: string; token: string }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "120px 1fr",
      gap: "1rem",
      alignItems: "center",
      padding: "1rem 0",
      borderBottom: "1px solid var(--color-border-default)",
    }}
  >
    <strong
      style={{
        color: "var(--color-text-primary)",
      }}
    >
      {label}
    </strong>

    <div>
      <div
        style={{
          height: "1.5rem",
          width: `var(${token})`,
          maxWidth: "100%",
          background: "var(--color-action-secondary)",
          borderRadius: "var(--radius-sm)",
          marginBottom: "0.5rem",
        }}
      />

      <code
        style={{
          color: "var(--color-text-muted)",
          fontSize: "0.875rem",
        }}
      >
        {token} → {`var(${token})`}
      </code>
    </div>
  </div>
);

const Section = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) => (
  <section
    style={{
      marginBottom: "3rem",
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

    {description && (
      <p
        style={{
          color: "var(--color-text-muted)",
          marginBottom: "1rem",
        }}
      >
        {description}
      </p>
    )}

    {children}
  </section>
);

const meta: Meta = {
  title: "FJ-Elements/Foundation/Spacing",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj;

export const Scale: Story = {
  render: () => (
    <main
      style={{
        padding: "3rem",
        maxWidth: "900px",
        background: "var(--color-background)",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          color: "var(--color-text-primary)",
          marginBottom: "0.5rem",
        }}
      >
        Spacing Tokens
      </h1>

      <Section
        title="Spacing Scale"
        description="Primitive spacing tokens used for padding, margins and layout gaps."
      >
        <SpacingBlock label="Extra Small" token="--spacing-xs" />

        <SpacingBlock label="Small" token="--spacing-sm" />

        <SpacingBlock label="Medium" token="--spacing-md" />

        <SpacingBlock label="Large" token="--spacing-lg" />

        <SpacingBlock label="Extra Large" token="--spacing-xl" />

        <SpacingBlock label="Extra Extra Large" token="--spacing-xxl" />
      </Section>
    </main>
  ),
};
