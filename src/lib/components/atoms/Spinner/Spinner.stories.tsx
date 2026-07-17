import type { Meta, StoryObj } from "@storybook/react-vite";
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
          background: "var(--color-background)",
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary"],
    },
    label: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    size: "md",
    color: "secondary",
    label: "Loading",
  },
};

export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        alignItems: "center",
      }}
    >
      <Spinner size="sm" label="Loading small content" />
      <Spinner size="md" label="Loading content" />
      <Spinner size="lg" label="Loading large content" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        alignItems: "center",
      }}
    >
      <Spinner size="md" color="primary" label="Loading primary" />

      <Spinner size="md" color="secondary" label="Loading secondary" />
    </div>
  ),
};

export const CustomMessage: Story = {
  args: {
    size: "md",
    color: "secondary",
    label: "Saving changes",
  },
};

export const Playground: Story = {
  args: {
    size: "md",
    color: "secondary",
    label: "Loading",
  },
};
