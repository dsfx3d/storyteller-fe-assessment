import * as React from "react";
import {type VariantProps, cva} from "class-variance-authority";

import {EStoryStatus} from "~/services/stories/enums/EStoryStatus";
import {cn} from "~/lib/utils";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function AStoryStatus({
  className,
  variant,
  status,
  ...props
}: BadgeProps) {
  return (
    <div className={cn(badgeVariants({variant, status}), className)} {...props}>
      {status}
    </div>
  );
}

const badgeVariants = cva(
  "inline-flex items-center rounded-sm border text-[11px] h-4.5 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent text-primary-foreground shadow cursor-pointer capitalize font-bold px-2 hover:bg-initial hover:opacity-90",
      },
      status: {
        [EStoryStatus.Draft]: "bg-accent-foreground",
        [EStoryStatus.Live]: "bg-success",
        [EStoryStatus.Scheduled]: "bg-accent-foreground",
        [EStoryStatus.Past]: "bg-[#a3a3a3]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
