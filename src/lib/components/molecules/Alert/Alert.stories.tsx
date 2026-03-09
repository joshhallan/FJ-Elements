import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "FJ-Elements/Molecules/Alert",
  component: Alert,
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
  argTypes: {
    intent: {
      control: "select",
      options: ["info", "success", "warning", "error"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: {
    intent: "success",
    title: "Success message",
    children:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nam velit, iure aut saepe molestiae ipsum repudiandae consectetur cum autem sapiente iusto eos architecto cumque temporibus porro omnis quidem odit!",
  },
};

export const ErrorState: Story = {
  args: {
    intent: "error",
    title: "Error message",
    children:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nam velit, iure aut saepe molestiae ipsum repudiandae consectetur cum autem sapiente iusto eos architecto cumque temporibus porro omnis quidem odit!",
    onDismiss: () => console.log("Alert dismissed"),
  },
};

export const Info: Story = {
  args: {
    intent: "info",
    title: "Info message",
    children:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nam velit, iure aut saepe molestiae ipsum repudiandae consectetur cum autem sapiente iusto eos architecto cumque temporibus porro omnis quidem odit!",
  },
};
