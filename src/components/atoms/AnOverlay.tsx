import {cn} from "~/lib/utils";

type TProps = React.ComponentProps<"div"> & {
  isOpen?: boolean;
};

export function AnOverlay({isOpen, className, ...divProps}: TProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(toAnOverlay(isOpen), className)}
      {...divProps}
    ></div>
  );
}

const toAnOverlay = (isOpen?: boolean) =>
  cn(
    "absolute w-screen h-screen bg-black left-0 top-0",
    "opacity-75 z-40 transition-opacity",
    {"hidden opacity-0": !isOpen},
  );
