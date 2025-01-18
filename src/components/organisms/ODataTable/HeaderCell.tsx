import {ArrowDown, ArrowUp, ArrowUpDown, type LucideIcon} from "lucide-react";
import {Button} from "~/components/ui/button";
import {TColumnMeta} from "./TColumnMeta";
import {TStory} from "~/services/stories/types/TStory";
import {cn} from "~/lib/utils";
import React, {useCallback} from "react";
import type {HeaderContext, SortDirection} from "@tanstack/react-table";

type THeaderProps = HeaderContext<TStory, unknown>;

// eslint-disable-next-line complexity
export function HeaderCell({column}: THeaderProps) {
  const meta = column.columnDef.meta as TColumnMeta | undefined;
  const sortDirection = column.getIsSorted();
  const Icon = sortDirection ? sortIcon[sortDirection] : ArrowUpDown;
  const handleClick = useCallback(() => {
    if (!meta?.disableSort) {
      column?.toggleSorting(column.getIsSorted() === "asc");
    }
  }, [column, meta?.disableSort]);
  return (
    meta?.columnName && (
      <Button
        variant="ghost"
        className="p-0 text-sm justify-start font-semibold h-7"
        onClick={handleClick}
      >
        {meta?.columnName}
        {!meta?.disableSort && (
          <Icon
            className={cn({
              "opacity-35": sortDirection === false,
            })}
          />
        )}
      </Button>
    )
  );
}

const sortIcon: Record<SortDirection, LucideIcon> = {
  asc: ArrowUp,
  desc: ArrowDown,
};
