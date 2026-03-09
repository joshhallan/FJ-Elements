import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";
import { Typography } from "../../typography";
import { Badge } from "../../atoms/Badge";

const meta: Meta<typeof Accordion> = {
  title: "FJ-Elements/Molecules/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const Bullet = () => (
  <span
    style={{
      height: "4px",
      width: "12px",
      background: "var(--color-secondary)",
      marginTop: "0.6rem",
      borderRadius: "4px",
      flexShrink: 0,
    }}
  />
);

const AccordionContent = ({ text, items, badges }: any) => (
  <div style={{ color: "white" }}>
    <Typography as="p" style={{ marginBottom: "1rem" }}>
      {text}
    </Typography>
    <ul style={{ listStyle: "none", padding: 0 }}>
      {items.map((item: string, i: number) => (
        <li
          key={i}
          style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}
        >
          <Bullet />
          {item}
        </li>
      ))}
    </ul>
    <div
      style={{
        display: "flex",
        gap: "0.5rem",
        marginTop: "1rem",
        flexWrap: "wrap",
      }}
    >
      {badges.map((badge: string) => (
        <Badge key={badge}>{badge}</Badge>
      ))}
    </div>
  </div>
);

/* --- Stories --- */

// 1. Single Accordion (Clean Isolation)
export const Single: Story = {
  args: {
    title: "Isolated Component Test",
    subtitle: "Standalone Mode",
    defaultOpen: true,
    children: (
      <AccordionContent
        text="This story shows a single accordion. Use the Storybook viewport tool to test scaling."
        items={["Scales to container width", "Flexible content area"]}
        badges={["Atomic", "Clean"]}
      />
    ),
  },
};

// 2. The Full Stack
export const AccordionStack: Story = {
  args: {
    title: "Control",
    subtitle: "Subtitle",
    defaultOpen: true,
    children: (
      <Typography as="p">This content comes from the story args!</Typography>
    ),
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          background: "rgba(255,255,255,0.03)",
          padding: "clamp(1rem, 5vw, 2.5rem)",
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.1)",
          boxSizing: "border-box",
        }}
      >
        <Story />
        <Accordion title="Accordion 1" subtitle="Subtitle 1">
          <Typography as="p" style={{ marginBottom: "1rem" }}>
            This is the content for Accordion 1. It can contain any React nodes,
            including text, lists, and badges.
          </Typography>

          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
        </Accordion>

        <Accordion title="Accordion 2" subtitle="Subtitle 2">
          <Typography as="p" style={{ marginBottom: "1rem" }}>
            This is the content for Accordion 2. It can contain any React nodes,
            including text, lists, and badges.
          </Typography>

          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
          </ul>
        </Accordion>
      </div>
    ),
  ],
};
