import {EStoryStatus} from "../enums/EStoryStatus";
import {z} from "zod";

export const storySchema = z.object({
  id: z.string(),
  title: z.string(),
  thumbnails: z.array(z.string()),
  status: z.enum([
    EStoryStatus.Draft,
    EStoryStatus.Live,
    EStoryStatus.Past,
    EStoryStatus.Scheduled,
  ]),
  modifiedAt: z.string().refine(timestamp => new Date(timestamp)),
  liveAt: z.string().refine(timestamp => new Date(timestamp)),
  endAt: z.string().refine(timestamp => new Date(timestamp)),
});
