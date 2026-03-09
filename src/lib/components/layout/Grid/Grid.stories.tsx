import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { GridX } from "./GridX";
import { Cell } from "./Cell";
import { Container } from "./Container";
import styles from "./Grid.stories.module.css";

const Placeholder = ({
  label,
  variant = "primary",
}: {
  label: string;
  variant?: string;
}) => <div className={`${styles.placeholder} ${styles[variant]}`}>{label}</div>;

const meta: Meta<typeof GridX> = {
  title: "FJ-Elements/Layout/Grid",
  component: GridX,
  tags: ["autodocs"],
  argTypes: {
    gap: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    align: {
      control: "select",
      options: ["start", "center", "end", "justify", "spaced"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof GridX>;

export const BasicLayout: Story = {
  args: {
    gap: "md",
    align: "start",
  },
  render: (args) => (
    <Container>
      <GridX {...args}>
        <Cell small={12} medium={6} large={4}>
          <Placeholder label="Column 1" variant="primary" />
        </Cell>
        <Cell small={12} medium={6} large={4}>
          <Placeholder label="Column 2" variant="secondary" />
        </Cell>
        <Cell small={12} medium={12} large={4}>
          <Placeholder label="Column 3" variant="accent" />
        </Cell>
      </GridX>
    </Container>
  ),
};

export const TwelveColumnGrid: Story = {
  render: () => (
    <Container>
      <GridX gap="xs">
        {[...Array(12)].map((_, i) => (
          <Cell key={i} small={1}>
            <Placeholder label={`${i + 1}`} variant="muted" />
          </Cell>
        ))}
      </GridX>
    </Container>
  ),
};
