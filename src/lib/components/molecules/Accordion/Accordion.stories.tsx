import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion } from "./Accordion";
import { Typography } from "../../typography/Typography";

const meta: Meta<typeof Accordion> = {
  title: "FJ-Elements/Molecules/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    title: "Accordion title",
    subtitle: "Optional subtitle",
    children: (
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Typography>
    ),
  },
};

export const Open: Story = {
  args: {
    title: "Accordion title",
    subtitle: "Opened by default",
    defaultOpen: true,
    children: (
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Typography>
    ),
  },
};

export const Stack: Story = {
  render: () => (
    <>
      <Accordion title="First accordion">
        <Typography>First accordion content.</Typography>
      </Accordion>

      <Accordion title="Second accordion">
        <Typography>Second accordion content.</Typography>
      </Accordion>

      <Accordion title="Third accordion">
        <Typography>Third accordion content.</Typography>
      </Accordion>
    </>
  ),
};
