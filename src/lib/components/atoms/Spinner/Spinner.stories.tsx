import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "FJ-Elements/Atoms/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "3rem",
          background: "var(--color-bg)",
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    size: "md",
    color: "secondary",
  },
};

export const Sizes: Story = {
  render: () => (
    <>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </>
  ),
};

export const PrimaryColor: Story = {
  args: {
    size: "md",
    color: "primary",
  },
};
