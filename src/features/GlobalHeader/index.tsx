import {Avatar, AvatarFallback} from "~/components/ui/avatar";
import {cn} from "~/lib/utils";
import AHelpIcon from "~/components/atoms/AHelpIcon";
import AStorytellerLogo from "~/components/atoms/AStorytellerLogo";
import {sidebarToggleContainer} from "~/features/Sidebar/sidebarToggleContainer";
import {globalHeaderHeight} from "./globalHeaderHeight";

export function GlobalHeader() {
  return (
    <nav
      className={`bg-primary flex w-full justify-between items-center px-5 h-[${globalHeaderHeight}]`}
    >
      <div className={cn(headerGroup, "gap-4")}>
        <div id={sidebarToggleContainer} className="desktop:hidden"></div>
        <AStorytellerLogo className="h-9.5 w-auto" />
      </div>
      <div className={headerGroup}>
        <AHelpIcon className="w-auto h-5 fill-white cursor-pointer" />
        <Avatar className="w-7.5 h-7.5 tablet:h-9 tablet:w-9 cursor-pointer tablet:mr-2.5">
          <AvatarFallback className="font-inter bg-info text-white text-sm  tablet:text-xl">
            RJ
          </AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}

const headerGroup = cn("flex items-center gap-5 tablet:gap-8");
