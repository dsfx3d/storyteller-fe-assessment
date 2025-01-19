"use client";
import {ColumnBuilder} from "../../components/organisms/ODataTable/ColumnBuilder";
import {DateTimeCell} from "./cells/DateTimeCell";
import {HeaderCell} from "../../components/organisms/ODataTable/HeaderCell";
import {ODataTable} from "~/components/organisms/ODataTable";
import {OPaginationControls} from "~/components/organisms/OPaginationControls";
import {RowActions} from "./cells/RowControl";
import {type SortingState} from "@tanstack/react-table";
import {StoryStatusCell} from "./cells/StoryStatusCell";
import {StoryThumbnailCell} from "./cells/StoryThumbnailCell";
import {Suspense, useState} from "react";
import {TColumnDef} from "~/components/organisms/ODataTable/TColumnDef";
import {TStory} from "~/services/stories/types/TStory";
import {TitleCell} from "./cells/TitleCell";
import StoryFilters from "./StoryFilters";

type TProps = {
  data: TStory[];
};

export function StoriesTable({data}: TProps) {
  const [sorting, setSorting] = useState<SortingState>([
    {
      id: "modifiedAt",
      desc: true,
    },
  ]);
  return (
    <>
      <StoryFilters />
      {/* <div className="overflow-auto"> */}
      <ODataTable
        columns={columns}
        data={data}
        sorting={sorting}
        onChangeSorting={setSorting}
      />
      {/* </div> */}
      <div className="flex justify-center lg:justify-end pt-7.5 lg:p-8 lg:px-8 pb-8.5">
        <Suspense>
          <OPaginationControls
            totalPages={2}
            aria-label="Stories table pagination"
          />
        </Suspense>
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
