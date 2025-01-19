"use client";
import {Button} from "../ui/button";
import {Input} from "../ui/input";
import {Search} from "lucide-react";
import {cn} from "~/lib/utils";
import React, {forwardRef} from "react";

type TProps = React.ComponentProps<"input">;

export const MSearchbar = forwardRef<HTMLInputElement, TProps>(
  function MSearchbar({className, ...inputProps}, ref) {
    return (
      <div
        className={cn(
          "rounded-sm h-9 box-border overflow-hidden flex focus-within:ring-1 focus-within:ring-ring",
          "border border-input",
          className,
        )}
      >
        <Input
          ref={ref}
          {...inputProps}
          className="rounded-r-none focus-visible:ring-0 border-0"
          placeholder="Search"
          aria-label="Search input"
        />
        <Button
          className="rounded-l-none border-0 text-white focus-visible:bg-black/75 min-w-8.5 h-8.5 [&_svg]:size-3"
          size="icon"
          variant="secondary"
          aria-label="Search button"
        >
          <Search />
        </Button>
      </div>
    );
  },
);
