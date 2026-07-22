import type { Meta, StoryObj } from "@storybook/react-vite";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { IconLink } from "./IconLink";

const meta: Meta<typeof IconLink> = {
  title: "Atoms/IconLink",
  component: IconLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof IconLink>;

export const Default: Story = {
  args: {
    href: "https://github.com/joshhallan",
    label: "Visit my GitHub profile",
    icon: <FaGithub aria-hidden="true" />,
  },
};

export const SocialLinks: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem" }}>
      <IconLink
        href="https://github.com/joshhallan"
        label="Visit my GitHub profile"
        icon={<FaGithub aria-hidden="true" />}
      />

      <IconLink
        href="https://www.linkedin.com/in/joshuaallan/"
        label="Visit my LinkedIn profile"
        icon={<FaLinkedin aria-hidden="true" />}
      />

      <IconLink
        href="https://medium.com/@joshuaallan_73828"
        label="Visit my Medium profile"
        icon={<FaMedium aria-hidden="true" />}
      />
    </div>
  ),
};

export const KeyboardFocus: Story = {
  args: {
    href: "#",
    label: "Example icon link",
    icon: <FaGithub aria-hidden="true" />,
  },
};
