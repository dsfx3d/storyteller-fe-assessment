import type {Meta, StoryObj} from "@storybook/react";

import {OGlobalHeader} from "./OGlobalHeader";

const meta = {
  title: "Organisms/GlobalHeader",
  component: OGlobalHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof OGlobalHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
