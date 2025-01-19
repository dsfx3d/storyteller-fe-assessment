import {EFilterParams} from "~/lib/enums/EFilterParams";
import {Reader} from "fp-ts/lib/Reader";
import {db} from "./db";
import {flow, pipe} from "fp-ts/lib/function";
import {fold, tryCatchK} from "fp-ts/lib/IOEither";
import {minmax} from "~/lib/minmax";
import {of} from "fp-ts/lib/IO";
import {storySchema} from "~/services/stories/schema/storySchema";
import {toInternalError} from "~/lib/api/toInternalError";
import {toResponse} from "~/lib/api/toResponse";
import {z} from "zod";

const pageSize = 10;

const toData = (offset: number) =>
  z
    .array(storySchema)
    .parse(db)
    .slice(offset, offset + pageSize);

export const GET: Reader<Request, Response> = request =>
  pipe(
    new URL(request.url).searchParams,
    searchParams => Number(searchParams.get(EFilterParams.Page)),
    page => minmax(page - 1, 0, 1) * pageSize,
    tryCatchK(flow(toData, toResponse(200)), toInternalError),
    fold(of, of),
  )();
