import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextArea } from "./TextArea";

const meta: Meta<typeof TextArea> = {
  title: "FJ-Elements/Forms/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "2rem",
          maxWidth: "500px",
          background: "var(--color-background)",
        }}
      >
        <Story />
      </div>
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
    id: "bio",
    label: "Biography",
    placeholder: "Tell us your story...",
    required: true,
  },
};

export const ErrorState: Story = {
  args: {
    id: "feedback",
    label: "Feedback",
    defaultValue: "Too short",
    error: "Please provide at least 50 characters of feedback.",
  },
};

export const Disabled: Story = {
  args: {
    id: "disabled",
    label: "Disabled message",
    disabled: true,
    value: "This field cannot currently be edited.",
  },
};

export const LongContent: Story = {
  args: {
    id: "description",
    label: "Description",
    defaultValue:
      "This is an example of a textarea with longer content to demonstrate scrolling behaviour.",
    rows: 8,
  },
};
