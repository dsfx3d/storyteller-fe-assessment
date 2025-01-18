import {AStoryStatus} from "~/components/atoms/AStoryStatus";
import {type CellContext} from "@tanstack/react-table";
import {EFilterParams} from "~/lib/enums/EFilterParams";
import {EStoryStatus} from "~/services/stories/enums/EStoryStatus";
import {TStory} from "~/services/stories/types/TStory";
import {useSearchParam} from "~/hooks/useSearchParam";
import {useCallback} from "react";

type TProps = CellContext<TStory, unknown>;

export function StoryStatusCell({cell}: TProps) {
  const status = cell.getValue<EStoryStatus>();
  const [, setStatus] = useSearchParam(EFilterParams.Status);
  const handleStatusClick = useCallback(() => {
    setStatus(status);
  }, [status, setStatus]);
  return (
    <div className="w-full flex justify-center" onClick={handleStatusClick}>
      <AStoryStatus status={status} />
    </div>
  );
}
