import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "./Link";

const meta: Meta<typeof Link> = {
  title: "FJ-Elements/Atoms/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
    isExternal: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    variant: "primary",
    children: "Navigate to Dashboard",
    href: "#",
  },
};

export const External: Story = {
  args: {
    variant: "secondary",
    children: "Visit GitHub",
    href: "https://github.com",
    isExternal: true,
  },
};

export const Comparison: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        alignItems: "center",
      }}
    >
      <Link variant="primary" href="#">
        Primary Link
      </Link>

      <Link variant="secondary" href="#">
        Secondary Link
      </Link>

      <Link variant="primary" href="https://github.com" isExternal>
        External Link
      </Link>
    </div>
  ),
};
