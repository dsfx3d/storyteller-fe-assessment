import {storySchema} from "../schema/storySchema";
import {z} from "zod";

export type TStory = z.infer<typeof storySchema>;
