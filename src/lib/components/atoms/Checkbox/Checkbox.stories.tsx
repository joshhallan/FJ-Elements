import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "FJ-Elements/Forms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    id: "remember",
    label: "Remember me",
  },
};

export const Checked: Story = {
  args: {
    id: "newsletter",
    label: "Subscribe to newsletter",
    defaultChecked: true,
  },
};

export const Error: Story = {
  args: {
    id: "terms",
    label: "Accept terms and conditions",
    required: true,
    error: "You must accept the terms before continuing.",
  },
};

export const Disabled: Story = {
  args: {
    id: "disabled",
    label: "Restricted option",
    disabled: true,
  },
};

export const Group: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Checkbox id="updates" label="Receive updates" defaultChecked />

      <Checkbox id="marketing" label="Receive marketing emails" />

      <Checkbox id="security" label="Receive security alerts" defaultChecked />
    </div>
  ),
};
