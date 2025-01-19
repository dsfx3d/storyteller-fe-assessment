import {useCallback, useState} from "react";
import Image from "next/image";

type TProps = React.ComponentProps<typeof Image> & {
  fallbackSrc: string;
};

export function ASafeImage({src, alt, fallbackSrc, ...imageProps}: TProps) {
  const [srcUrl, setSrcUrl] = useState(src);
  const toFallback = useCallback(() => setSrcUrl(fallbackSrc), [fallbackSrc]);
  return <Image {...imageProps} src={srcUrl} onError={toFallback} alt={alt} />;
}
