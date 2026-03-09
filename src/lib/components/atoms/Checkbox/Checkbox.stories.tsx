import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { Container } from "../../layout/Grid/";
import { Typography } from "../../typography";

const meta: Meta<typeof Checkbox> = {
  title: "FJ-Elements/Forms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Container>
        <div style={{ marginTop: "2rem", maxWidth: "400px" }}>
          <Story />
        </div>
      </Container>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Basic: Story = {
  args: {
    id: "remember-me",
    label: "Remember me on this device",
  },
};

export const CheckedByDefault: Story = {
  args: {
    id: "newsletter",
    label: "Subscribe to the grid newsletter",
    defaultChecked: true,
  },
};

export const RequiredWithError: Story = {
  args: {
    id: "terms",
    label: "I accept the Terms and Conditions",
    required: true,
    error: "You must accept the terms to continue.",
  },
};

export const Disabled: Story = {
  args: {
    id: "disabled-check",
    label: "Admin Access (Restricted)",
    disabled: true,
  },
};

export const CheckboxList: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Typography as="h4">System Preferences</Typography>
      <Checkbox id="pref-1" label="Enable Dark Mode" defaultChecked />
      <Checkbox id="pref-2" label="Hardware Acceleration" />
      <Checkbox id="pref-3" label="Automatic Updates" defaultChecked />
    </div>
  ),
};
