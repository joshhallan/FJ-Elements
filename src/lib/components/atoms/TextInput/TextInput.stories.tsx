import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "./TextInput";
import { Container } from "../../layout/Grid/";

const meta: Meta<typeof TextInput> = {
  title: "FJ-Elements/Forms/TextInput",
  component: TextInput,
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
type Story = StoryObj<typeof TextInput>;

export const Basic: Story = {
  args: {
    id: "username",
    label: "Username",
    placeholder: "Enter your name...",
  },
};

export const Required: Story = {
  args: {
    id: "email-required",
    label: "Email Address",
    placeholder: "example@domain.com",
    required: true,
  },
};

export const ErrorState: Story = {
  args: {
    id: "password-error",
    label: "Password",
    type: "password",
    defaultValue: "12345",
    error: "Password must be at least 8 characters long.",
  },
};

export const Disabled: Story = {
  args: {
    id: "disabled-input",
    label: "Account ID (Locked)",
    defaultValue: "USR-9982-X",
    disabled: true,
  },
};

export const FullFormLayout: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <TextInput
        id="first-name"
        label="First Name"
        placeholder="John"
        required
      />
      <TextInput id="last-name" label="Last Name" placeholder="Doe" required />
      <div style={{ display: "flex", gap: "1rem" }}>
        <div style={{ flex: 2 }}>
          <TextInput id="city" label="City" placeholder="Sunderland" />
        </div>
        <div style={{ flex: 1 }}>
          <TextInput id="postcode" label="Postcode" placeholder="SR1" />
        </div>
      </div>
      <TextInput
        id="bio"
        label="Biography"
        placeholder="Tell us a bit about yourself..."
        error="There is an error."
      />
    </div>
  ),
};
