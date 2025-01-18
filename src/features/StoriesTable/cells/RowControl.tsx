import {Button} from "~/components/ui/button";
import {Pencil, Trash2} from "lucide-react";

export function RowActions() {
  return (
    <div className="flex gap-4 pr-7.5">
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
