import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "./Divider";

const meta = {
  title: "FJ-Elements/Atoms/Divider",
  component: Divider,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary", "accent"],
      control: {
        type: "radio",
      },
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Accent: Story = {
  args: {
    variant: "accent",
  },
};

export const Comparison: Story = {
  render: () => (
    <div>
      <Divider variant="primary" />

      <Divider variant="secondary" />

      <Divider variant="accent" />
    </div>
  ),
};
