"use client";
import * as React from "react";
import {ColumnBuilder} from "../../components/organisms/ODataTable/ColumnBuilder";
import {DateTimeCell} from "./cells/DateTimeCell";
import {HeaderCell} from "../../components/organisms/ODataTable/HeaderCell";
import {ODataTable} from "~/components/organisms/ODataTable";
import {OPaginationControls} from "~/components/organisms/OPaginationControls";
import {RowActions} from "./cells/RowControl";
import {type SortingState} from "@tanstack/react-table";
import {StoryStatusCell} from "./cells/StoryStatusCell";
import {StoryThumbnailCell} from "./cells/StoryThumbnailCell";
import {TColumnDef} from "~/components/organisms/ODataTable/TColumnDef";
import {TStory} from "~/services/stories/types/TStory";
import {TitleCell} from "./cells/TitleCell";

type TProps = {
  data: TStory[];
};

export function StoriesTable({data}: TProps) {
  const [sorting, setSorting] = React.useState<SortingState>([
    {
      id: "modifiedAt",
      desc: true,
    },
  ]);
  return (
    <>
      <div className="overflow-auto">
        <ODataTable
          columns={columns}
          data={data}
          sorting={sorting}
          onChangeSorting={setSorting}
        />
      </div>
      <div className="flex justify-center lg:justify-end py-4 lg:p-8 lg:px-8">
        <OPaginationControls totalPages={2} />
      </div>
    </>
  );
}

const column = ColumnBuilder.column<TStory>().header(HeaderCell);
const timeColumn = column.headerClassName("min-w-[165px]").cell(DateTimeCell);

export const columns: TColumnDef<TStory>[] = [
  column
    .accessor("title")
    .name("Title")
    .headerClassName(
      "min-w-[202px] md:min-w-[400px] lg:w-[616px] lg:max-w-[616px]",
    )
    .cell(TitleCell)
    .build(),
  column
    .accessor("thumbnails")
    .name("Pages")
    .headerClassName("min-w-[273px]")
    .cell(StoryThumbnailCell)
    .disableSort()
    .build(),
  timeColumn.accessor("modifiedAt").name("Modified At").build(),
  column
    .accessor("status")
    .name("Status")
    .headerClassName("w-[111px] text-center")
    .cell(StoryStatusCell)
    .build(),
  timeColumn.accessor("liveAt").name("Live From").build(),
  timeColumn.accessor("endAt").name("End").build(),
  column.accessor("id").disableSort().cell(RowActions).build(),
];
