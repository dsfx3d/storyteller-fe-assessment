"use client";
import {CreateStory} from "~/features/CreateStory";
import {EFilterParams} from "~/lib/enums/EFilterParams";
import {EStoryStatus} from "~/services/stories/enums/EStoryStatus";
import {MSearchbar} from "~/components/molecules/MSearchbar";
import {OSearchFilter} from "~/components/organisms/OSearchFilter";
import {OSelectFilter} from "~/components/organisms/OSelectFilter";
import {PaginationView} from "./PaginationView";
import {SelectTrigger, SelectValue} from "~/components/ui/select";
import {Suspense} from "react";

export default function StoryFilters() {
  return (
    <div className="flex gap-4.5 md:gap-7.5 items-center px-4.5 lg:px-7.5">
      <Suspense>
        <OSearchFilter
          param={EFilterParams.Search}
          as={MSearchbar}
          id="search-stories"
          aria-label="Search stories"
          className="w-full md:w-fit lg:w-[300px] xl:w-[376px]"
        />
        <OSelectFilter
          clearLabel="All Statuses"
          param={EFilterParams.Status}
          items={Object.values(EStoryStatus)}
        >
          <SelectTrigger
            className="capitalize md:w-[200px]"
            aria-label="Filter by status"
          >
            <SelectValue placeholder="All Statuses"></SelectValue>
          </SelectTrigger>
        </OSelectFilter>
      </Suspense>
      <div className="hidden xl:flex grow justify-end xl:justify-start">
        <PaginationView />
      </div>
      <div className="hidden md:flex grow xl:shrink justify-end">
        <CreateStory />
      </div>
    </div>
  );
}
