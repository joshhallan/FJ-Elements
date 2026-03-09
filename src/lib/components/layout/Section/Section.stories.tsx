import type { Meta, StoryObj } from "@storybook/react-vite";
import { Section } from "./Section";
import { Card } from "../../molecules/Card";

const meta: Meta<typeof Section> = {
  title: "FJ-Elements/Layout/Section",
  component: Section,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: {
    size: "xl",
  },
  render: (args) => (
    <Section {...args}>
      <div
        style={{
          border: "1px dashed var(--color-muted)",
          padding: "2rem",
          textAlign: "center",
          color: "var(--color-white)",
        }}
      >
        This content is constrained by the Section's max-width (1200px) and
        padding.
      </div>
    </Section>
  ),
};

export const WithCard: Story = {
  args: {
    size: "lg",
  },
  render: (args) => (
    <Section {...args}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
        }}
      >
        <Card variant="cyan">
          <Card.Header>Composition Test</Card.Header>
          <Card.Body>
            This Card is sitting inside a Section. Notice the horizontal
            alignment.
          </Card.Body>
        </Card>
        <Card variant="pink">
          <Card.Header>Layout Integrity</Card.Header>
          <Card.Body>
            The Section handles the vertical rhythm (padding-block).
          </Card.Body>
        </Card>
      </div>
    </Section>
  ),
};
