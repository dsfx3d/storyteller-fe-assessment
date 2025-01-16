import {Avatar, AvatarFallback} from "../ui/avatar";
import AHelpIcon from "../atoms/AHelpIcon";
import AStorytellerLogo from "../atoms/AStorytellerLogo";

export function OGlobalHeader() {
  return (
    <nav className="bg-primary flex w-full justify-between items-center px-5 py-2.5">
      <AStorytellerLogo className="h-9.5 w-auto" />
      <div className="flex items-center gap-5 desktop:gap-8 desktop:px-2.5">
        <AHelpIcon className="w-auto h-5 fill-white cursor-pointer" />
        <Avatar className="w-7.5 h-7.5 desktop:h-9 desktop:w-9 cursor-pointer">
          <AvatarFallback className="font-inter bg-info text-white text-sm  desktop:text-xl">
            RJ
          </AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}
