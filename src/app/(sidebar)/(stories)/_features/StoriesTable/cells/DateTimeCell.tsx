import {type CellContext} from "@tanstack/react-table";
import {TStory} from "~/services/stories/types/TStory";
import {format} from "date-fns";
import React from "react";

type TProps = CellContext<TStory, unknown>;

export function DateTimeCell({cell}: TProps) {
  const value = `${cell.getValue()}`;
  return (
    <span className="text-sm">
      {value.length > 0 ? format(value, "MMM d, h:mm a") : "—"}
    </span>
  );
}
