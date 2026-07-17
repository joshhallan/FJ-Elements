import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "FJ-Elements/Forms/Switch",
  component: Switch,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "3rem",
          background: "var(--color-background)",
          minHeight: "200px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    id: "notifications",
    label: "Enable notifications",
  },
};

export const Checked: Story = {
  args: {
    id: "dark-mode",
    label: "Enable dark mode",
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    id: "disabled-switch",
    label: "Enable account sync",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    id: "disabled-checked-switch",
    label: "Automatic updates",
    defaultChecked: true,
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    id: "required-switch",
    label: "Accept terms and conditions",
    error: "You must enable this option to continue.",
  },
};
