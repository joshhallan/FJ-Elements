import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tooltip } from "./Tooltip";
import { Button } from "../Button/Button";

const meta: Meta<typeof Tooltip> = {
  title: "FJ-Elements/Atoms/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "5rem",
          background: "var(--color-bg)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "200px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
  args: {
    content: "Tool tip message",
    position: "top",
    children: <Button variant="secondary">Hover Me</Button>,
  },
};

export const Right: Story = {
  args: {
    content: "More information",
    position: "right",
    children: <span style={{ color: "white" }}>Check Status</span>,
  },
};

export const KeyboardAccessible: Story = {
  args: {
    content: "This tooltip appears when focused",
    position: "top",
    children: <button>Focus me</button>,
  },
};
