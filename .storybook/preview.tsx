import React from "react";
import type { Preview } from "@storybook/react";
import { themes } from "storybook/theming";
import "../src/lib/styles/main.css";

import "@fontsource/geist-sans/400.css";
import "@fontsource/geist-sans/700.css";
import "@fontsource/geist-sans/800.css";
import "@fontsource/geist-mono/400.css";
import "@fontsource/geist-mono/900.css";

import "../src/lib/styles/layout.css";
import "../src/lib/styles/reset.css";
import "../src/lib/components/typography/Typography.module.css";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    docs: {
      theme: themes.dark,
    },
    backgrounds: { disable: true },
    options: {
      storySort: {
        order: ["Foundations", "Layout", "Components", ["Cards", "*"], "*"],
      },
    },
  },
  decorators: [(Story) => <Story />],
};

export default preview;
