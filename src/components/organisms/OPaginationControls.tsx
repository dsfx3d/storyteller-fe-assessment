"use client";
import {Button} from "../ui/button";
import {EFilterParams} from "~/lib/enums/EFilterParams";
import {Input} from "../ui/input";
import {MoveLeft, MoveRight} from "lucide-react";
import {OSearchFilter} from "~/components/organisms/OSearchFilter";
import {OSelectFilter} from "~/components/organisms/OSelectFilter";
import {SelectTrigger, SelectValue} from "../ui/select";
import {useSearchParam} from "~/hooks/useSearchParam";
import React from "react";

type TProps = React.ComponentProps<"nav"> & {
  totalPages: number;
};

export function OPaginationControls({totalPages, ...navProps}: TProps) {
  const [page, setPage] = useSearchParam(EFilterParams.Page, {emptyValue: "1"});
  return (
    <nav
      {...navProps}
      className="inline-flex gap-2 lg:gap-7.5 items-center text-sm"
    >
      <div className="flex items-center">
        Page{" "}
        <OSearchFilter
          param={EFilterParams.Page}
          as={Input}
          className="w-[60px] px-2"
          emptyValue="1"
          min={1}
          max={totalPages}
          aria-label="Page number"
        />
        of {totalPages}
      </div>
      <OSelectFilter param={EFilterParams.PageSize} items={[]}>
        <SelectTrigger className="w-[110px]" aria-label="Select page size">
          <SelectValue placeholder="10 Rows"></SelectValue>
        </SelectTrigger>
      </OSelectFilter>
      <div>
        <Button
          role="button"
          className="text-[#888a8f] rounded-r-none border-r-[0.5px] rounded-l-sm w-8 h-8"
          variant="outline"
          onClick={() => setPage((+page - 1).toString())}
          aria-label="Previous page"
        >
          <MoveLeft />
        </Button>
        <Button
          role="button"
          className="text-[#888a8f] rounded-l-none border-l-[0.5px] rounded-r-sm w-8 h-8"
          variant="outline"
          onClick={() => setPage((+page + 1).toString())}
          aria-label="Next page"
        >
          <MoveRight />
        </Button>
      </div>
    </nav>
  );
}
