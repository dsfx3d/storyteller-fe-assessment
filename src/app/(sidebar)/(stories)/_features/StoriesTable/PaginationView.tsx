import {EFilterParams} from "~/lib/enums/EFilterParams";
import {useSearchParam} from "~/hooks/useSearchParam";
import React from "react";

export function PaginationView() {
  const [page] = useSearchParam(EFilterParams.Page, {emptyValue: "1"});
  const offset = (+page - 1) * 10;
  const limit = offset + 10;
  return (
    <div className="text-sm [word-spacing:_0.1rem]">
      Showing {offset + 1} to {limit} of 20
    </div>
  );
}
