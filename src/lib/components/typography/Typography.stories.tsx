import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "FJ-Elements/Typography/Typography",
  component: Typography,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Scale: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <Typography as="h1">
        H1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        possimus delectus cumque reiciendis aliquid corporis animi quae, nulla,
        illo, atque assumenda itaque tempore? Id perferendis, libero dolor
        possimus iure explicabo.
      </Typography>
      <Typography as="h2">
        H2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        harum eos autem perspiciatis nisi veniam, sed possimus similique
        inventore hic mollitia voluptatibus quam. Maxime hic nam quam minima
        odio consequuntur?
      </Typography>
      <Typography as="h3">
        H3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        harum eos autem perspiciatis nisi veniam, sed possimus similique
        inventore hic mollitia voluptatibus quam. Maxime hic nam quam minima
        odio consequuntur?
      </Typography>
      <Typography as="h3" gradient>
        H3 (Gradient) - Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Magnam harum eos autem perspiciatis nisi veniam, sed possimus similique
        inventore hic mollitia voluptatibus quam. Maxime hic nam quam minima
        odio consequuntur?
      </Typography>
      <Typography as="p">
        P - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
        delectus culpa placeat, recusandae, nihil libero blanditiis amet neque
        eveniet voluptates, provident minima accusamus velit dolores laboriosam
        quam consectetur laborum consequuntur!
      </Typography>
      <Typography as="small">
        Small - Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
        saepe id et qui necessitatibus optio at vero velit nulla quia nesciunt,
        cumque sapiente! Repellat hic ullam sapiente iure nam! Magni!
      </Typography>
    </div>
  ),
};

export const GradientHeading: Story = {
  args: {
    as: "h1",
    gradient: true,
    children: "Gradient Hero",
  },
};
