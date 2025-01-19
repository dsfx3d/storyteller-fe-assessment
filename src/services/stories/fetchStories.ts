import {EFilterParams} from "~/lib/enums/EFilterParams";
import {Reader} from "fp-ts/lib/Reader";
import {TStory} from "./types/TStory";
import {TStoryFilters} from "./types/TStoryFilters";
import {env} from "~/lib/env";
import {flatMap, fold, map, tryCatchK} from "fp-ts/lib/TaskEither";
import {identity, pipe} from "fp-ts/lib/function";
import {of} from "fp-ts/lib/Task";
import {storySchema} from "./schema/storySchema";
import {z} from "zod";

const toRequestUrl = ({pagination}: TStoryFilters) =>
  `${env.NEXT_PUBLIC_API_URL}/api/stories?${EFilterParams.Page}=${pagination.page}`;

export const fetchStories: Reader<TStoryFilters, Promise<TStory[]>> = (
  filters: TStoryFilters,
) =>
  pipe(
    toRequestUrl(filters),
    tryCatchK(fetch, identity),
    flatMap(tryCatchK(res => res.json(), identity)),
    map(z.array(storySchema).parse),
    fold(err => {
      console.error(err);
      return of([]);
    }, of),
  )();
