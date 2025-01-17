import type {Meta, StoryObj} from "@storybook/react";

import {GlobalHeader} from "./index";

const meta = {
  title: "Features/GlobalHeader",
  component: GlobalHeader,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof GlobalHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
