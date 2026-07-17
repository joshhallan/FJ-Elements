import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "FJ-Elements/Atoms/Badge",
  component: Badge,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Primary",
  },
};

export const Variants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <Badge variant="primary">Primary</Badge>

      <Badge variant="secondary">Secondary</Badge>

      <Badge variant="muted">Muted</Badge>
    </div>
  ),
};

export const LongContent: Story = {
  args: {
    children: "Long content that might overflow the badge",
  },
};

export const CustomContent: Story = {
  args: {
    children: "New",
  },
};
