import {IO} from "fp-ts/lib/IO";
import {type LucideIcon, Menu, X} from "lucide-react";
import {cn} from "~/lib/utils";
import {forwardRef, useCallback} from "react";

type TProps = Omit<React.ComponentProps<LucideIcon>, "role"> & {
  value: boolean;
  onToggle: IO<void>;
};

export const MHamburgerToggle = forwardRef<SVGSVGElement, TProps>(
  function MHamburgerToggle({className, onToggle, value, ...iconProps}, ref) {
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
        ref={ref}
        role="button"
        className={cn("cursor-pointer", className)}
        onClick={onToggle}
        onKeyDown={handleKeyboard}
        {...iconProps}
      />
    );
  },
);
