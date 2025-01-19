import {CreateStory} from "~/features/CreateStory";
import {StoriesTable} from "~/features/StoriesTable";
import {fetchStories} from "~/services/stories/fetchStories";

export default async function Home() {
  const data = await fetchStories();
  return (
    <section
      aria-label="Stories"
      className="grow bg-background lg:mb-8.5 overflow-hidden lg:rounded-b-2xl"
    >
      <header className="flex justify-between px-4.5 lg:px-7.5 py-4.5">
        <h1 className="text-3xl font-black">Stories</h1>
        <CreateStory className="md:hidden" />
      </header>
      <StoriesTable data={data} />
    </section>
  );
}
