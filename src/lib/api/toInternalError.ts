import {flow} from "fp-ts/lib/function";
import {toResponse} from "./toResponse";

export const toInternalError = flow(
  (err: unknown) => ({
    error: {
      message: (err as Error).message,
    },
  }),
  JSON.stringify,
  toResponse(500),
);
