import {OPaginationControls} from "./OPaginationControls";
import {fn} from "@storybook/test";
import type {Meta, StoryObj} from "@storybook/react";

const meta = {
  title: "Organisms/PaginationControls",
  component: OPaginationControls,
  args: {
    onChangePage: fn(),
  },
} satisfies Meta<typeof OPaginationControls>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
  },
};
