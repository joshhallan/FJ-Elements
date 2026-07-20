import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioGroup } from "./RadioGroup";
import { Radio } from "../../atoms/Radio/Radio";

const meta: Meta<typeof RadioGroup> = {
  title: "FJ-Elements/Forms/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ marginTop: "2rem", maxWidth: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Basic: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <Radio id="option-1" label="Standard Connection" />
      <Radio id="option-2" label="Fiber Optic" />
      <Radio id="option-3" label="Satellite" />
    </RadioGroup>
  ),
  args: {
    label: "Select Connection Type",
    name: "connection-type",
  },
};

export const PreSelected: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <Radio id="plan-1" label="Monthly Billing" value="monthly" />
      <Radio id="plan-2" label="Annual Billing" value="annual" defaultChecked />
    </RadioGroup>
  ),
  args: {
    label: "Subscription Plan",
    name: "billing-cycle",
  },
};

export const WithError: Story = {
  render: (args) => (
    <RadioGroup {...args}>
      <Radio id="choice-1" label="Accept" />
      <Radio id="choice-2" label="Decline" />
    </RadioGroup>
  ),
  args: {
    label: "Security Clearance",
    name: "clearance",
    error: "You must select an authorization level to proceed.",
  },
};
