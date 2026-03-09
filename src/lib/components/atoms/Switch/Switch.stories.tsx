import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "FJ-Elements/Atoms/Switch",
  component: Switch,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "3rem",
          background: "var(--color-bg)",
          minHeight: "200px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    id: "toggle-1",
    label: "Checkbox 1",
  },
};

export const Checked: Story = {
  args: {
    id: "toggle-2",
    label: "Checkbox 2",
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    id: "toggle-3",
    label: "Checkbox 3",
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    id: "toggle-4",
    label: "Checkbox 4",
    error: "Checkbox is required",
  },
};
