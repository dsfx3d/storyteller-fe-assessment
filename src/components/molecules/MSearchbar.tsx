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
          "rounded-sm flex focus-within:ring-1 focus-within:ring-ring",
          className,
        )}
      >
        <Input
          ref={ref}
          {...inputProps}
          className="rounded-r-none focus-visible:ring-0"
          placeholder="Search"
          aria-label="Search input"
        />
        <Button
          className="rounded-l-none bg-gray-400 text-white focus-visible:bg-black"
          size="icon"
          aria-label="Search button"
        >
          <Search />
        </Button>
      </div>
    );
  },
);
