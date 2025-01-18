import {type CellContext} from "@tanstack/react-table";
import {MStoryThumbnails} from "~/components/molecules/MStoryThumbnails";
import {TStory} from "~/services/stories/types/TStory";

type TProps = CellContext<TStory, unknown>;

export function StoryThumbnailCell({cell}: TProps) {
  return <MStoryThumbnails thumbnails={cell.getValue<string[]>()} />;
}
