import {type CellContext} from "@tanstack/react-table";
import {TStory} from "~/services/stories/types/TStory";
import {format} from "date-fns";

type TProps = CellContext<TStory, unknown>;

export function TitleCell({row, column}: TProps) {
  const publishDate = row.getValue<string>("liveAt");
  return (
    <div className="flex flex-col justify-start text-base text-accent-foreground pl-2.5 md:pl-2.5">
      <a className="cursor-pointer w-fit leading-5" href="#">
        {row.getValue(column.id)}
      </a>
      <span className="text-gray-400 cursor-pointer w-fit leading-5">
        ({publishDate ? format(publishDate, "MMM d") : "No publish date set"})
      </span>
    </div>
  );
}
