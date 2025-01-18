import {AStoryStatus} from "~/components/atoms/AStoryStatus";
import {type CellContext} from "@tanstack/react-table";
import {EStoryStatus} from "~/services/stories/enums/EStoryStatus";
import {TStory} from "~/services/stories/types/TStory";

type TProps = CellContext<TStory, unknown>;

export function StoryStatusCell({cell}: TProps) {
  return (
    <div className="w-full flex justify-center">
      <AStoryStatus status={cell.getValue<EStoryStatus>()} />
    </div>
  );
}
