import * as React from "react";
import {type VariantProps, cva} from "class-variance-authority";

import {EStoryStatus} from "~/services/stories/enums/EStoryStatus";
import {cn} from "~/lib/utils";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function AStoryStatus({className, status, ...props}: BadgeProps) {
  return (
    <div className={cn(badgeVariants({status}), className)} {...props}>
      {status}
    </div>
  );
}

const badgeVariants = cva("a-story-status hover:bg-initial hover:opacity-90", {
  variants: {
    status: {
      [EStoryStatus.Draft]: "bg-accent-foreground",
      [EStoryStatus.Live]: "bg-success",
      [EStoryStatus.Scheduled]: "bg-accent-foreground",
      [EStoryStatus.Past]: "bg-[#a3a3a3]",
    },
  },
});
