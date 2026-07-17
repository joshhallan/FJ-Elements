import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card";
import { Typography } from "../../typography/Typography";

const meta: Meta<typeof Card> = {
  title: "FJ-Elements/Molecules/Cards/Generic Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["cyan", "pink"],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "400px", margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const FullExample: Story = {
  args: {
    variant: "cyan",
  },
  render: (args) => (
    <Card {...args}>
      <Card.Header>
        <Typography as="h4">Card header copy</Typography>
      </Card.Header>
      <Card.Body>
        <Typography as="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nam
          velit, iure aut saepe molestiae ipsum repudiandae consectetur cum
          autem sapiente iusto eos architecto cumque temporibus porro omnis
          quidem odit!
        </Typography>
      </Card.Body>
      <Card.Footer>
        <div style={{ fontSize: "0.8rem", color: "var(--color-secondary)" }}>
          Footer copy
        </div>
      </Card.Footer>
    </Card>
  ),
};
