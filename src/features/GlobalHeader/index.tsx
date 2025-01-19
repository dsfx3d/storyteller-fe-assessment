"use client";
import {Avatar, AvatarFallback} from "~/components/ui/avatar";
import {Menu} from "lucide-react";
import {cn} from "~/lib/utils";
import {sidebarToggleContainer} from "~/features/Sidebar/sidebarToggleContainer";
import {useEffect, useState} from "react";
import AHelpIcon from "~/components/atoms/AHelpIcon";
import AStorytellerLogo from "~/components/atoms/AStorytellerLogo";

export function GlobalHeader() {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => setIsReady(true), []);

  return (
    <header className="bg-primary flex w-full justify-between items-center px-5 min-h-[60px] z-50">
      <div className={cn(headerGroup, "gap-4")}>
        <div id={sidebarToggleContainer} className="lg:hidden">
          {/* placeholder to avoid flicker on initial load */}
          {!isReady && (
            <Menu size={32} color="white" className="lg:scale-x-0" />
          )}
        </div>
        <AStorytellerLogo className="h-9.5 w-auto" />
      </div>
      <div className={headerGroup}>
        <AHelpIcon className="w-auto h-5 fill-white cursor-pointer" />
        <Avatar className="w-7.5 h-7.5 md:h-9 md:w-9 cursor-pointer lg:mr-2.5">
          <AvatarFallback className="font-inter bg-info text-white text-sm md:text-xl">
            RJ
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

const headerGroup = cn("flex items-center gap-5 md:gap-8");
