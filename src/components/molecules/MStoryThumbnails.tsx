import {cn} from "~/lib/utils";
import Image from "next/image";

type TProps = {
  thumbnails: string[];
};

const maxThumbnails = 7;

export function MStoryThumbnails({thumbnails}: TProps) {
  const thumbnailCount = thumbnails.length;
  const tooManyThumbnails = thumbnailCount > maxThumbnails;
  const thumbs = tooManyThumbnails
    ? thumbnails.slice(0, Math.min(thumbnailCount, maxThumbnails - 1))
    : thumbnails;
  return (
    <div className="flex gap-1">
      {thumbs.map(thumbnail => (
        <a href="#" key={thumbnail}>
          <Image
            src={`https://picsum.photos/29/52?random=${thumbnail}`}
            width={29}
            height={52}
            alt="Story thumbnail"
            className={thumbnailStyle}
          />
        </a>
      ))}
      {tooManyThumbnails && (
        <MoreThumbnails value={thumbnails.length - maxThumbnails + 1} />
      )}
    </div>
  );
}

function MoreThumbnails({value}: {value: number}) {
  return (
    <div className={cn("flex justify-center items-center", thumbnailStyle)}>
      +{value}
    </div>
  );
}

const thumbnailStyle = cn(
  "bg-[#ebebeb] rounded-sm hover:opacity-75 w-[29px] h-[52px] cursor-pointer",
);
