import {env} from "~/lib/env";
import {storySchema} from "./schema/storySchema";
import {z} from "zod";

export async function fetchStories() {
  try {
    const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/stories?_limit=20`);
    return z.array(storySchema).parse(await res.json());
  } catch (error) {
    console.error(error);
    return [];
  }
}
