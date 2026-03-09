import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "./TextArea";
import { Container } from "../../layout/Grid/";

const meta: Meta<typeof TextArea> = {
  title: "FJ-Elements/Forms/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Container>
        <div style={{ marginTop: "2rem", maxWidth: "500px" }}>
          <Story />
        </div>
      </Container>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Basic: Story = {
  args: {
    id: "comments",
    label: "Comments",
    placeholder: "Write your message here...",
  },
};

export const Required: Story = {
  args: {
    id: "bio-required",
    label: "Biography",
    placeholder: "Tell us your story...",
    required: true,
  },
};

export const ErrorState: Story = {
  args: {
    id: "feedback-error",
    label: "Feedback",
    defaultValue: "Too short",
    error: "Please provide at least 50 characters of feedback.",
  },
};
