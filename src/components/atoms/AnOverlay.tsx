import {cn} from "~/lib/utils";

type TProps = React.ComponentProps<"div"> & {
  isOpen?: boolean;
};

export function AnOverlay({isOpen, className, ...divProps}: TProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("an-overlay", {"hidden opacity-0": !isOpen}, className)}
      {...divProps}
    ></div>
  );
}
