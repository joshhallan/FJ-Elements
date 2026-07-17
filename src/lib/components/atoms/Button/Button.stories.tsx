import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "FJ-Elements/Atoms/Button",
  component: Button,
  tags: ["autodocs"],

  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },

    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Action",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Action",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

export const Comparison: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "1.5rem",
        alignItems: "center",
      }}
    >
      <Button variant="primary">Primary Button</Button>

      <Button variant="secondary">Secondary Button</Button>
    </div>
  ),
};
