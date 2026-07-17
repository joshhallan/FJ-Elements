import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { ProjectCard } from "./ProjectCard";

const meta: Meta<typeof ProjectCard> = {
  title: "FJ-Elements/Molecules/Cards/Project Card",
  component: ProjectCard,
  tags: ["autodocs"],

  argTypes: {
    variant: {
      control: "select",
      options: ["short", "long"],
    },
  },

  decorators: [
    (Story) => (
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          margin: "2rem auto",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ProjectCard>;

const renderLink = (
  link: { href: string },
  className: string,
  children: React.ReactNode,
) => (
  <a href={link.href} className={className} target="_blank" rel="noreferrer">
    {children}
  </a>
);

const baseProject = {
  id: 1,

  title: "Example Project",

  category: "Development",

  image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d",

  description: "A short project description showing the default card layout.",

  fullDescription:
    "A longer project description showing additional details about architecture, challenges and implementation decisions.",

  tech: ["React", "TypeScript", "CSS Modules"],

  githubUrl: "https://github.com",

  link: "https://example.com",
};

export const Default: Story = {
  args: {
    project: baseProject,

    variant: "short",

    renderLink,
  },
};

export const LongDescription: Story = {
  args: {
    project: {
      ...baseProject,
      title: "Long Project Card",
    },

    variant: "long",

    renderLink,
  },
};

export const WorkInProgress: Story = {
  args: {
    project: {
      ...baseProject,
      title: "Accessibility Component Library",
      status: "WIP",
    },

    variant: "short",

    renderLink,
  },
};

export const InternalProject: Story = {
  args: {
    project: {
      ...baseProject,

      title: "Internal Tool",

      githubUrl: "",

      link: undefined,
    },

    variant: "short",

    renderLink,
  },
};
