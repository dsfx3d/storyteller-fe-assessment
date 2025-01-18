import {useCallback} from "react";
import {useRouter, useSearchParams} from "next/navigation";

type TProps = {
  emptyValue?: string;
};

export function useSearchParam(param: string, {emptyValue = ""}: TProps = {}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const set = useCallback(
    (value: string) => {
      const query = new URLSearchParams(searchParams.toString());
      if (value.trim() === emptyValue) {
        query.delete(param);
      } else {
        query.set(param, value);
      }
      router.push(`?${query.toString()}`);
    },
    [searchParams, router, param, emptyValue],
  );
  return [searchParams.get(param) ?? emptyValue, set] as const;
}
