import type { Meta, StoryObj } from "@storybook/react-vite";
import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "FJ-Elements/Foundation/Typography",
  component: Typography,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Scale: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <Typography as="h1">H1 - Heading One</Typography>

      <Typography as="h2">H2 - Heading Two</Typography>

      <Typography as="h3">H3 - Heading Three</Typography>

      <Typography as="h4">H4 - Heading Four</Typography>

      <Typography as="h5">H5 - Heading Five</Typography>

      <Typography as="h6">H6 - Heading Six</Typography>

      <Typography as="p">
        P - Body text paragraph example demonstrating the default reading style
        used throughout the component library.
      </Typography>

      <Typography as="small">
        Small - Supporting text for metadata and secondary information.
      </Typography>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Typography weight="regular">Regular</Typography>

      <Typography weight="medium">Medium</Typography>

      <Typography weight="semibold">Semibold</Typography>

      <Typography weight="bold">Bold</Typography>

      <Typography weight="extrabold">Extra Bold</Typography>
    </div>
  ),
};

export const Modifiers: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <Typography as="h2" gradient>
        Gradient Heading
      </Typography>

      <Typography as="h2" glow>
        Glowing Heading
      </Typography>

      <Typography as="h2" gradient glow>
        Gradient + Glow Heading
      </Typography>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Typography align="left">Left aligned text</Typography>

      <Typography align="center">Centre aligned text</Typography>

      <Typography align="right">Right aligned text</Typography>
    </div>
  ),
};
