import {IO} from "fp-ts/lib/IO";
import {Menu, X, LucideIcon} from "lucide-react";
import {useCallback} from "react";
import {cn} from "~/lib/utils";

type TProps = Omit<React.ComponentProps<LucideIcon>, "role"> & {
  value: boolean;
  onToggle: IO<void>;
};

export function MHamburgerToggle({
  className,
  onToggle,
  value,
  ...iconProps
}: TProps) {
  const Icon = value ? X : Menu;
  const handleKeyboard = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        onToggle();
      }
    },
    [onToggle],
  );
  return (
    <Icon
      role="button"
      className={cn("cursor-pointer", className)}
      onClick={onToggle}
      onKeyDown={handleKeyboard}
      {...iconProps}
    />
  );
}
