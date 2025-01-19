import {EFilterParams} from "~/lib/enums/EFilterParams";
import {TStoryFilters} from "./types/TStoryFilters";

export function fromQuery(params: URLSearchParams): TStoryFilters {
  const page = Number(params.get(EFilterParams.Page) ?? 1);
  return {
    pagination: {
      page,
    },
  };
}
