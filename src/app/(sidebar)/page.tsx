import {StoriesTable} from "~/features/StoriesTable";
import {fetchStories} from "~/services/stories/fetchStories";

export default async function Home() {
  const data = await fetchStories();
  return (
    <main className="grow bg-background lg:mb-8 overflow-hidden lg:rounded-b-2xl">
      <h1 className="text-3xl font-black lg:rounded-b-xl px-4.5 lg:px-7.5 py-4">
        Stories
      </h1>
      <StoriesTable data={data} />
    </main>
  );
}
