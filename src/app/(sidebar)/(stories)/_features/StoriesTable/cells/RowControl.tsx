import {Button} from "~/components/ui/button";
import {type CellContext} from "@tanstack/react-table";
import {Pencil, Trash2} from "lucide-react";
import {TStory} from "~/services/stories/types/TStory";

type TProps = CellContext<TStory, unknown>;

export function RowActions({row}: TProps) {
  const title = row.getValue("title");
  return (
    <div className="flex gap-4 justify-center lg:pr-2.5">
      <Button variant="destructive" size="sm" aria-label={`Delete ${title}`}>
        <Trash2 />
      </Button>
      <Button
        variant="success"
        size="sm"
        className="text-[12px] text-white font-medium"
        aria-label={`Edit ${title}`}
      >
        <Pencil />
        Edit
      </Button>
    </div>
  );
}
