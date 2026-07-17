import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "FJ-Elements/Molecules/Alert",
  component: Alert,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: "600px",
          padding: "3rem",
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

const message =
  "This is an example alert message showing how feedback content is displayed.";

export const Success: Story = {
  args: {
    intent: "success",
    title: "Success message",
    children: message,
  },
};

export const ErrorState: Story = {
  args: {
    intent: "error",
    title: "Error message",
    children: message,
    onDismiss: () => console.log("Alert dismissed"),
  },
};

export const Info: Story = {
  args: {
    intent: "info",
    title: "Information",
    children: message,
  },
};

export const Warning: Story = {
  args: {
    intent: "warning",
    title: "Warning",
    children: message,
  },
};
