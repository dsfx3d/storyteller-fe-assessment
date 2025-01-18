import {MSearchbar} from "./MSearchbar";
import type {Meta, StoryObj} from "@storybook/react";

const meta = {
  title: "Molecules/MSearchbar",
  component: MSearchbar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MSearchbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
