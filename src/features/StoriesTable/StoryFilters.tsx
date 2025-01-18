import {CreateStory} from "../CreateStory";
import {EFilterParams} from "~/lib/enums/EFilterParams";
import {EStoryStatus} from "~/services/stories/enums/EStoryStatus";
import {MSearchbar} from "~/components/molecules/MSearchbar";
import {OSearchFilter} from "~/components/organisms/OSearchFilter";
import {OSelectFilter} from "~/components/organisms/OSelectFilter";
import {SelectTrigger, SelectValue} from "~/components/ui/select";

export default function StoryFilters() {
  return (
    <div className="flex gap-7.5 justify-between px-4.5 lg:px-7.5 pb-7.5">
      <div className="flex gap-4.5 lg:gap-7.5 grow">
        <OSearchFilter
          param={EFilterParams.Search}
          as={MSearchbar}
          className="w-full md:w-fit lg:w-[300px] xl:w-[376px]"
        />
        <OSelectFilter
          clearLabel="All Statuses"
          param={EFilterParams.Status}
          items={Object.values(EStoryStatus)}
        >
          <SelectTrigger className="capitalize bg-white w-full h-8.5 md:w-[200px]">
            <SelectValue placeholder="All Statuses"></SelectValue>
          </SelectTrigger>
        </OSelectFilter>
      </div>
      <CreateStory className="hidden md:flex" />
    </div>
  );
}
