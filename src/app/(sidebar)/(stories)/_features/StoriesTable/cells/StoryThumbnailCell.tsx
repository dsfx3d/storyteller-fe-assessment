import {type CellContext} from "@tanstack/react-table";
import {MThumbnail} from "~/components/molecules/MThumbnail";
import {TStory} from "~/services/stories/types/TStory";

type TProps = CellContext<TStory, unknown>;
const maxThumbnails = 7;

export function StoryThumbnailCell({cell}: TProps) {
  const thumbnails = cell.getValue<string[]>();
  const thumbnailCount = thumbnails.length;
  const tooManyThumbnails = thumbnailCount > maxThumbnails;
  const thumbs = tooManyThumbnails
    ? thumbnails.slice(0, Math.min(thumbnailCount, maxThumbnails - 1))
    : thumbnails;
  return (
    <div className="flex gap-1.5">
      {thumbs.map(thumbnail => (
        <MThumbnail
          key={thumbnail}
          src={`https://picsum.photos/29/52?random=${thumbnail}`}
          width={29}
          height={52}
          alt="Story thumbnail"
        />
      ))}
      {tooManyThumbnails && (
        <MThumbnail text={`+${thumbnails.length - maxThumbnails + 1}`} />
      )}
    </div>
  );
}
