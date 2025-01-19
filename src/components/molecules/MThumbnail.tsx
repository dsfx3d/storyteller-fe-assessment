import {ASafeImage} from "../atoms/ASafeImage";
import Image from "next/image";

type TProps = Omit<React.ComponentProps<typeof Image>, "src" | "alt"> &
  (
    | {
        src?: never;
        text?: string;
        alt?: never;
      }
    | {
        src: string;
        alt: string;
        text?: never;
      }
  );

export function MThumbnail({src, text, alt, ...imgProps}: TProps) {
  return (
    <a href="#" className={"a-thumbnail hover:opacity-75"}>
      {text && <div className="flex justify-center items-center">{text}</div>}
      {src && (
        <ASafeImage
          {...imgProps}
          src={src}
          alt={alt!}
          fallbackSrc={fallbackImage}
        />
      )}
    </a>
  );
}

const fallbackImage = "/images/placeholder.svg";
