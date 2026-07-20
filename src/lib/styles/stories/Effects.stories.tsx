import type { Meta, StoryObj } from "@storybook/react-vite";

const EffectPreview = ({
  label,
  token,
  description,
}: {
  label: string;
  token: string;
  description: string;
}) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "160px 1fr",
      gap: "1.5rem",
      alignItems: "center",
      padding: "1.5rem 0",
      borderBottom: "1px solid var(--color-border-default)",
    }}
  >
    <div
      style={{
        height: "96px",
        width: "96px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--color-surface)",
        borderRadius: "var(--radius-lg)",
        boxShadow: `var(${token})`,
        color: "var(--color-text-primary)",
        fontSize: "0.75rem",
        textTransform: "uppercase",
      }}
    >
      Glow
    </div>

    <div>
      <strong
        style={{
          display: "block",
          color: "var(--color-text-primary)",
          marginBottom: "0.25rem",
        }}
      >
        {label}
      </strong>

      <p
        style={{
          color: "var(--color-text-muted)",
          margin: "0 0 0.5rem",
        }}
      >
        {description}
      </p>

      <code
        style={{
          color: "var(--color-text-muted)",
          fontSize: "0.875rem",
        }}
      >
        {token}
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
  title: "FJ-Elements/Foundation/Effects",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj;

export const Glow: Story = {
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
        Effect Tokens
      </h1>

      <p
        style={{
          color: "var(--color-text-muted)",
          marginBottom: "3rem",
        }}
      >
        Decorative effects used to reinforce hierarchy, emphasis and brand
        identity.
      </p>

      <Section
        title="Glow Effects"
        description="Neon glow effects used for emphasis and visual feedback."
      >
        <EffectPreview
          label="Primary Glow"
          token="--shadow-glow-primary"
          description="Primary brand emphasis using the pink palette."
        />

        <EffectPreview
          label="Secondary Glow"
          token="--shadow-glow-secondary"
          description="Secondary emphasis using the cyan palette."
        />

        <EffectPreview
          label="Accent Glow"
          token="--shadow-glow-accent"
          description="Accent emphasis using the coral palette."
        />
      </Section>

      <Section
        title="Shadow Effects"
        description="Available glow effects for emphasis and decorative elements."
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <div
            style={{
              padding: "2rem",
              borderRadius: "var(--radius-lg)",
              background: "var(--color-surface)",
              boxShadow: "var(--shadow-glow-primary)",
              color: "var(--color-text-primary)",
            }}
          >
            Primary Glow
          </div>

          <div
            style={{
              padding: "2rem",
              borderRadius: "var(--radius-lg)",
              background: "var(--color-surface)",
              boxShadow: "var(--shadow-glow-secondary)",
              color: "var(--color-text-primary)",
            }}
          >
            Secondary Glow
          </div>

          <div
            style={{
              padding: "2rem",
              borderRadius: "var(--radius-lg)",
              background: "var(--color-surface)",
              boxShadow: "var(--shadow-glow-accent)",
              color: "var(--color-text-primary)",
            }}
          >
            Accent Glow
          </div>
        </div>
      </Section>
    </main>
  ),
};
