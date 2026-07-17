import type { Meta, StoryObj } from "@storybook/react-vite";
import { Grid } from "./Grid";
import { Cell } from "./Cell";
import styles from "./Grid.stories.module.css";

const Placeholder = ({
  label,
  variant = "primary",
}: {
  label: string;
  variant?: string;
}) => <div className={`${styles.placeholder} ${styles[variant]}`}>{label}</div>;

const meta: Meta<typeof Grid> = {
  title: "FJ-Elements/Layout/Grid",
  component: Grid,
  tags: ["autodocs"],
  argTypes: {
    gap: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const BasicLayout: Story = {
  args: {
    gap: "md",
  },
  render: (args) => (
    <Grid {...args}>
      <Cell small={12} medium={6} large={4}>
        <Placeholder label="Column 1" variant="primary" />
      </Cell>
      <Cell small={12} medium={6} large={4}>
        <Placeholder label="Column 2" variant="secondary" />
      </Cell>
      <Cell small={12} medium={12} large={4}>
        <Placeholder label="Column 3" variant="accent" />
      </Cell>
    </Grid>
  ),
};

export const TwelveColumnGrid: Story = {
  render: () => (
    <Grid gap="xs">
      {[...Array(12)].map((_, i) => (
        <Cell key={i} small={1}>
          <Placeholder label={`${i + 1}`} variant="muted" />
        </Cell>
      ))}
    </Grid>
  ),
};
