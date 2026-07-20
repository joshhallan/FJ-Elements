import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./Select";

const mockOptions = [
  { value: "sector-1", label: "Sector 7 - Industrial" },
  { value: "sector-2", label: "Sector 4 - Neon District" },
  { value: "sector-3", label: "Sector 1 - Executive" },
];

const meta: Meta<typeof Select> = {
  title: "FJ-Elements/Forms/Select",
  component: Select,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "3rem",
          background: "var(--color-bg)",
          maxWidth: "400px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    id: "location-select",
    label: "Select Mission Dropzone",
    options: mockOptions,
  },
};

export const WithError: Story = {
  args: {
    id: "error-select",
    label: "Authentication Node",
    options: mockOptions,
    error: "Selected node is offline. Re-route required.",
  },
};

export const Disabled: Story = {
  args: {
    id: "disabled-select",
    label: "Locked Terminal",
    options: mockOptions,
    disabled: true,
  },
};
