import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconButton } from "./IconButton";
import { FaGithub, FaTimes, FaExternalLinkAlt } from "react-icons/fa";

const meta: Meta<typeof IconButton> = {
  title: "FJ-Elements/Atoms/IconButton",
  component: IconButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: {
    icon: <FaTimes />,
    label: "Close modal",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    icon: <FaExternalLinkAlt />,
    label: "Open external link",
    variant: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    icon: <FaGithub />,
    label: "View GitHub profile",
    variant: "ghost",
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <IconButton icon={<FaGithub />} label="GitHub" variant="ghost" />
      <IconButton
        icon={<FaExternalLinkAlt />}
        label="Live Demo"
        variant="secondary"
      />
      <IconButton
        icon={<FaTimes />}
        label="Close Modal"
        variant="primary"
        size="sm"
      />
    </div>
  ),
};
