import {Button} from "~/components/ui/button";
import {Plus} from "lucide-react";
import {cn} from "~/lib/utils";

type TProps = {
  className?: string;
};

export function CreateStory({className}: TProps) {
  return (
    <Button
      variant="success"
      className={cn(
        "text-base h-9 [&_svg]:size-5 font-medium gap-0 pl-3",
        className,
      )}
    >
      <Plus />
      New Story
    </Button>
  );
}
