import {Sidebar} from "./index";
import {sidebarToggleContainer} from "./sidebarToggleContainer";
import type {Meta, StoryObj} from "@storybook/react";

const meta = {
  title: "Features/Sidebar",
  component: Sidebar,
  decorators: [
    Story => (
      <div className="bg-background">
        <div
          id={sidebarToggleContainer}
          className={`bg-primary h-[60px]`}
        ></div>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
