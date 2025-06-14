import {CreateStory} from "~/features/CreateStory";
import {Metadata} from "next";
import {StoriesTable} from "./_features/StoriesTable";
import {fetchStories} from "~/services/stories/fetchStories";
import {fromQuery} from "~/services/stories/storyFiltersInterop";
import {pipe} from "fp-ts/lib/function";
import StoryFilters from "./_features/StoriesTable/StoryFilters";

type TProps = {
  searchParams: URLSearchParams;
};

export const metadata: Metadata = {
  title: "Stories",
};

export default async function Home({searchParams}: TProps) {
  const data = await pipe(
    new URLSearchParams(searchParams),
    fromQuery,
    fetchStories,
  );
  return (
    <section
      aria-label="Stories"
      className="space-y-8 grow bg-background lg:mb-8.5 overflow-hidden lg:rounded-b-2xl"
    >
      <header>
        <div className="flex justify-between px-4.5 lg:px-7.5 py-4">
          <h1 className="text-3xl font-bold">Stories</h1>
          <CreateStory className="md:hidden" />
        </div>
        <StoryFilters />
      </header>
      <StoriesTable data={data} />
    </section>
  );
}
