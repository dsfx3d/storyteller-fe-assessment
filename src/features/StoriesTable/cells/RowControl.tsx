import {Button} from "~/components/ui/button";
import {Pencil, Trash2} from "lucide-react";

export function RowActions() {
  return (
    <div className="flex pr-4.5 gap-4 justify-center">
      <Button variant="destructive" size="sm">
        <Trash2 />
      </Button>
      <Button
        variant="success"
        size="sm"
        className="text-[12px] text-white font-medium"
      >
        <Pencil />
        Edit
      </Button>
    </div>
  );
}
