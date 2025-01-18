import {type CellContext} from "@tanstack/react-table";
import {TStory} from "~/services/stories/types/TStory";
import {format} from "date-fns";

type TProps = CellContext<TStory, unknown>;

export function TitleCell({row, column}: TProps) {
  const publishDate = row.getValue<string>("liveAt");
  return (
    <div className="flex flex-col justify-start text-base text-accent-foreground py-[6px]">
      <a className="cursor-pointer w-fit" href="#">
        {row.getValue(column.id)}
      </a>
      <span className="text-gray-400 cursor-pointer w-fit">
        ({publishDate ? format(publishDate, "MMM d") : "No publish date set"})
      </span>
    </div>
  );
}
