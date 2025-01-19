import {EFilterParams} from "~/lib/enums/EFilterParams";
import {TStoryFilters} from "./types/TStoryFilters";

export function fromQuery(params: URLSearchParams): TStoryFilters {
  const rawPage = Number(params.get(EFilterParams.Page));
  const page = Math.max(rawPage - 1, 1);
  const pageSize = Number(params.get(EFilterParams.PageSize)) || 10;
  return {
    pagination: {
      offset: page * pageSize,
      limit: pageSize,
    },
  };
}

export function toQuery(filter: TStoryFilters): URLSearchParams {
  const params = new URLSearchParams();
  params.set(
    EFilterParams.Page,
    String(filter.pagination.offset / (filter.pagination.limit ?? 10) + 1),
  );
  params.set(EFilterParams.PageSize, String(filter.pagination.limit ?? 10));
  return params;
}
