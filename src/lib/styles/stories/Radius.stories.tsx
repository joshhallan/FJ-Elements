import type { Meta, StoryObj } from "@storybook/react-vite";

const RadiusPreview = ({ label, token }: { label: string; token: string }) => (
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
    <div
      style={{
        width: "96px",
        height: "96px",
        background: "var(--color-action-secondary)",
        borderRadius: `var(${token})`,
      }}
    />

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
  title: "FJ-Elements/Foundation/Radius",
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
        Border Radius Tokens
      </h1>

      <Section
        title="Radius Scale"
        description="Primitive radius tokens controlling component shape and visual language."
      >
        <RadiusPreview label="Small" token="--radius-sm" />

        <RadiusPreview label="Medium" token="--radius-md" />

        <RadiusPreview label="Large" token="--radius-lg" />

        <RadiusPreview label="Full" token="--radius-full" />
      </Section>

      <Section
        title="Usage"
        description="Examples of where radius tokens are commonly applied."
      >
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              padding: "1rem",
              background: "var(--color-surface)",
              borderRadius: "var(--radius-sm)",
              color: "var(--color-text-primary)",
            }}
          >
            Buttons
          </div>

          <div
            style={{
              padding: "1rem",
              background: "var(--color-surface)",
              borderRadius: "var(--radius-md)",
              color: "var(--color-text-primary)",
            }}
          >
            Cards
          </div>

          <div
            style={{
              padding: "1rem",
              background: "var(--color-surface)",
              borderRadius: "var(--radius-lg)",
              color: "var(--color-text-primary)",
            }}
          >
            Modals
          </div>

          <div
            style={{
              padding: "1rem",
              background: "var(--color-surface)",
              borderRadius: "var(--radius-full)",
              color: "var(--color-text-primary)",
            }}
          >
            Pills
          </div>
        </div>
      </Section>
    </main>
  ),
};
