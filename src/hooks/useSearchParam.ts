import {useCallback} from "react";
import {useRouter, useSearchParams} from "next/navigation";

export function useSearchParam(param: string) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const set = useCallback(
    (value: string) => {
      const query = new URLSearchParams(searchParams.toString());
      if (value.length > 0) {
        query.set(param, value);
      } else {
        query.delete(param);
      }
      router.push(`?${query.toString()}`);
    },
    [searchParams, router, param],
  );
  return [searchParams.get(param) ?? "", set] as const;
}
