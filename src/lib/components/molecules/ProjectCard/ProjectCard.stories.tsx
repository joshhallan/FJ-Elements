import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ProjectCard } from "./ProjectCard";

const meta: Meta<typeof ProjectCard> = {
  title: "FJ-Elements/Molecules/Cards/Project Card",
  component: ProjectCard,
  tags: ["autodocs"],
  argTypes: {
    style: {
      control: "select",
      options: ["short", "long"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

const baseProject = {
  id: 1,
  title: "Example Project",
  category: "Development",
  image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d",
  description: "A short snippet of what this project does.",
  fullDescription:
    "A much longer, detailed breakdown of the project architecture, the challenges faced, and the solutions implemented during development.",
  tech: ["React", "TypeScript", "CSS Modules"],
  githubUrl: "https://github.com",
  link: "https://google.com",
};

// 1. SHORT VERSION (The Default)
export const Short: Story = {
  args: {
    project: { ...baseProject, title: "Short Card Style" },
    style: "short",
    renderLink: (link, className, children) => (
      <a
        href={link.href}
        className={className}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    ),
  },
};

export const Long: Story = {
  args: {
    ...Short.args,
    project: { ...baseProject, title: "Long Card Style" },
    style: "long",
  },
};

export const NoLinks: Story = {
  args: {
    ...Short.args,
    project: {
      ...baseProject,
      title: "No Actions Card",
      githubUrl: "",
      link: undefined,
    },
  },
};
