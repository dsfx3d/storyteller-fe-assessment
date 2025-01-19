import {CreateStory} from "~/features/CreateStory";
import {StoriesTable} from "~/features/StoriesTable";
import {fetchStories} from "~/services/stories/fetchStories";

export default async function Home() {
  const data = await fetchStories();
  return (
    <main className="grow bg-background lg:mb-8.5 overflow-hidden lg:rounded-b-2xl">
      <div className="flex justify-between px-4.5 lg:px-7.5 py-4.5">
        <h1 className="text-3xl font-black">Stories</h1>
        <CreateStory className="md:hidden" />
      </div>
      <StoriesTable data={data} />
    </main>
  );
}
