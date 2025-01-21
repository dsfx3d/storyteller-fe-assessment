import {EFilterParams} from "~/lib/enums/EFilterParams";
import {pipe} from "fp-ts/lib/function";
import {useCallback, useMemo} from "react";
import {useSearchParam} from "~/hooks/useSearchParam";
import type {ColumnSort, OnChangeFn, SortingState} from "@tanstack/react-table";

export function useSorting(
  defaultValue: string,
): [SortingState, OnChangeFn<SortingState>] {
  const [sortQuery, setSortQuery] = useSearchParam(EFilterParams.OrderBy, {
    emptyValue: defaultValue,
  });
  const sortingState = useMemo<SortingState>(
    () => [toColumnSort(sortQuery)],
    [sortQuery],
  );
  const setSortingState = useCallback<OnChangeFn<SortingState>>(
    oldSorting => {
      let sorting = oldSorting;
      if (typeof sorting === "function") {
        sorting = sorting(sortingState);
      }
      pipe(sorting, toSortingQuery, setSortQuery);
    },
    [setSortQuery, sortingState],
  );

  return [sortingState, setSortingState] as const;
}

function toSortingQuery(sorting: SortingState): string {
  return sorting.map(({id, desc}) => (desc ? `-${id}` : id)).join(",");
}

function toColumnSort(query: string): ColumnSort {
  const desc = query.startsWith("-");
  const id = query.replace(/^-/, "");
  return {id, desc};
}
