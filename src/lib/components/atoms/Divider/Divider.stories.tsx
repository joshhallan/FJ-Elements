import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";

const meta = {
  title: "FJ-Elements/Atoms/Divider",
  component: Divider,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary", "accent"],
      control: { type: "radio" },
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
