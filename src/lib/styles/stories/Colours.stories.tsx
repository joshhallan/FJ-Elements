import type { Meta, StoryObj } from "@storybook/react-vite";

const Swatch = ({
  label,
  token,
  type = "color",
}: {
  label: string;
  token: string;
  type?: "color" | "shadow";
}) => (
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
        height: "48px",
        borderRadius: "var(--radius-md)",
        border: "1px solid var(--color-control-border)",
        background: type === "color" ? `var(${token})` : "var(--color-surface)",
        boxShadow: type === "shadow" ? `var(${token})` : undefined,
      }}
    />

    <div>
      <strong
        style={{
          display: "block",
          color: "var(--color-text-primary)",
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
  <section style={{ marginBottom: "3rem" }}>
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
          marginBottom: "1.5rem",
        }}
      >
        {description}
      </p>
    )}

    {children}
  </section>
);

const SubSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div style={{ marginBottom: "2rem" }}>
    <h3
      style={{
        color: "var(--color-text-primary)",
        fontSize: "1rem",
        marginBottom: "0.5rem",
      }}
    >
      {title}
    </h3>

    {children}
  </div>
);

const meta: Meta = {
  title: "FJ-Elements/Foundation/Colours",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj;

export const Palette: Story = {
  render: () => (
    <main
      style={{
        padding: "3rem",
        maxWidth: "900px",
        background: "var(--color-background)",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "var(--color-text-primary)" }}>Colour Tokens</h1>

      <p
        style={{
          color: "var(--color-text-muted)",
          marginBottom: "3rem",
        }}
      >
        Primitive tokens define the raw palette. Semantic tokens define how
        components should consume colours throughout the design system.
      </p>

      <Section
        title="Primitive Colours"
        description="Raw palette values used as the foundation for themes."
      >
        <Swatch label="Purple 900" token="--purple-900" />
        <Swatch label="Purple 800" token="--purple-800" />
        <Swatch label="Pink 500" token="--pink-500" />
        <Swatch label="Cyan 500" token="--cyan-500" />
        <Swatch label="Coral 500" token="--coral-500" />
        <Swatch label="Red 500" token="--red-500" />
        <Swatch label="Green 500" token="--green-500" />
        <Swatch label="White" token="--white" />
        <Swatch label="Black" token="--black" />
      </Section>

      <Section
        title="Semantic Colours"
        description="Purpose-driven tokens consumed by components."
      >
        <SubSection title="Backgrounds">
          <Swatch label="Background" token="--color-background" />
          <Swatch label="Surface" token="--color-surface" />
        </SubSection>

        <SubSection title="Text">
          <Swatch label="Primary Text" token="--color-text-primary" />
          <Swatch label="Secondary Text" token="--color-text-secondary" />
          <Swatch label="Muted Text" token="--color-text-muted" />
        </SubSection>

        <SubSection title="Borders">
          <Swatch label="Default Border" token="--color-border-default" />
          <Swatch label="Hover Border" token="--color-border-hover" />
        </SubSection>

        <SubSection title="Actions">
          <Swatch label="Primary Action" token="--color-action-primary" />
          <Swatch label="Secondary Action" token="--color-action-secondary" />
          <Swatch label="Focus" token="--color-focus" />
        </SubSection>

        <SubSection title="Feedback">
          <Swatch label="Success" token="--color-success" />
          <Swatch label="Error" token="--color-error" />
        </SubSection>

        <SubSection title="Decorative">
          <Swatch
            label="Primary Decoration"
            token="--color-decoration-primary"
          />

          <Swatch
            label="Secondary Decoration"
            token="--color-decoration-secondary"
          />

          <Swatch label="Accent Decoration" token="--color-decoration-accent" />
        </SubSection>

        <SubSection title="Controls">
          <Swatch label="Control Border" token="--color-control-border" />

          <Swatch
            label="Control Background"
            token="--color-control-background"
          />

          <Swatch
            label="Control Hover Border"
            token="--color-control-hover-border"
          />
        </SubSection>
      </Section>

      <Section
        title="Effects"
        description="Visual effects used to enhance components."
      >
        <Swatch
          label="Primary Glow"
          token="--shadow-glow-primary"
          type="shadow"
        />

        <Swatch
          label="Secondary Glow"
          token="--shadow-glow-secondary"
          type="shadow"
        />

        <Swatch
          label="Accent Glow"
          token="--shadow-glow-accent"
          type="shadow"
        />
      </Section>
    </main>
  ),
};
