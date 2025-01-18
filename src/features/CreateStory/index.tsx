import {Button} from "~/components/ui/button";
import {Plus} from "lucide-react";

type TProps = {
  className?: string;
};

export function CreateStory({className}: TProps) {
  return (
    <Button variant="success" className={className}>
      <Plus />
      New Story
    </Button>
  );
}
