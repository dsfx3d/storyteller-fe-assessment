import {OPaginationControls} from "./OPaginationControls";
import type {Meta, StoryObj} from "@storybook/react";

const meta = {
  title: "Organisms/PaginationControls",
  component: OPaginationControls,
} satisfies Meta<typeof OPaginationControls>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    totalPages: 10,
  },
};
