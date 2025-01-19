import AThumbnail from "../atoms/AThumbnail";

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
        <AThumbnail
          key={thumbnail}
          src={`https://picsum.photos/29/52?random=${thumbnail + Date.now()}`}
          width={29}
          height={52}
          alt="Story thumbnail"
        />
      ))}
      {tooManyThumbnails && (
        <AThumbnail text={`+${thumbnails.length - maxThumbnails + 1}`} />
      )}
    </div>
  );
}
