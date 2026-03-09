import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Nav } from "./Nav";
import { Typography } from "../../typography";

const meta: Meta<typeof Nav> = {
  title: "FJ-Elements/Molecules/Nav",
  tags: ["autodocs"],
  component: Nav,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Nav>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ minHeight: "200vh" }}>
        <Story />
        <div style={{ padding: "2rem" }}>
          <Typography as="p">Scroll down to test sticky behavior...</Typography>
        </div>
      </div>
    ),
  ],
  args: {
    brand: (
      <Typography as="span">
        FJ-
        <Typography as="span" gradient>
          ELEMENTS
        </Typography>
      </Typography>
    ),
    links: [
      { label: "Projects", href: "/projects" },
      { label: "Career", href: "/career" },
      { label: "Github", href: "https://github.com", external: true },
    ],
    renderLink: (link, className, onClick) => (
      <a href={link.href} className={className} onClick={onClick}>
        {link.label}
      </a>
    ),
  },
};
