import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "FJ-Elements/Utils/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "#0d0221",
          padding: "3rem",
          minHeight: "100vh",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    width: "300px",
    height: "20px",
  },
};

export const ProfileCardLoading: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
        width: "300px",
      }}
    >
      <Skeleton variant="circle" width={50} height={50} />
      <div style={{ flex: 1 }}>
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="50%" />
      </div>
    </div>
  ),
};
