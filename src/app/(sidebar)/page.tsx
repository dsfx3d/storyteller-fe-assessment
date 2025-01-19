import {CreateStory} from "~/features/CreateStory";
import {StoriesTable} from "~/features/StoriesTable";
import {fetchStories} from "~/services/stories/fetchStories";
import StoryFilters from "~/features/StoriesTable/StoryFilters";

export default async function Home() {
  const data = await fetchStories();
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
