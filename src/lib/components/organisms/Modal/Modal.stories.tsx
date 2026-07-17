import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Modal } from "./Modal";
import { Button } from "../../atoms/Button/Button";

type Story = StoryObj<typeof Modal>;

type ModalWrapperProps = Omit<
  React.ComponentProps<typeof Modal>,
  "isOpen" | "onClose"
>;

const ModalWrapper = (args: ModalWrapperProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Modal trigger</Button>

      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

const meta: Meta<typeof Modal> = {
  title: "FJ-Elements/Organisms/Modal",
  component: Modal,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "3rem",
          background: "var(--color-background)",
          minHeight: "300px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: "Modal title",
    children: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        tenetur voluptas, voluptate excepturi non, praesentium blanditiis
        laborum, similique odit nemo recusandae odio minima voluptatibus!
        Asperiores earum neque harum accusamus amet.
      </p>
    ),
  },
};

export const WithActions: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    title: "Modal with actions",
    children: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus odit
        perspiciatis earum eveniet, quisquam ex ipsum praesentium dolore dolorum
        ab tempora, repellat dicta? Quis atque cum distinctio aut accusantium
        adipisci.
      </p>
    ),
    footer: (
      <>
        <Button variant="primary" onClick={() => alert("Trigger 1")}>
          Trigger 1
        </Button>

        <Button onClick={() => alert("Trigger 2")}>Trigger 2</Button>
      </>
    ),
  },
};
