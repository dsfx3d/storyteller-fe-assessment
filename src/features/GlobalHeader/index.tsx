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
    <header className="global-header">
      <div className={cn(headerGroup, "gap-4")}>
        <div id={sidebarToggleContainer} className="lg:hidden">
          {/* placeholder sidebar toggle to avoid flicker on initial load */}
          {!isReady && (
            <Menu size={32} color="white" className="lg:scale-x-0" />
          )}
        </div>
        <a href="/">
          <AStorytellerLogo className="h-8 sm:h-9.5 w-auto" />
        </a>
      </div>
      <div className={cn(headerGroup, "lg:mr-2.5")}>
        <a href="#">
          <AHelpIcon className="w-auto h-5 fill-white cursor-pointer" />
        </a>
        <a href="#">
          <Avatar className="cursor-pointer">
            <AvatarFallback>RJ</AvatarFallback>
          </Avatar>
        </a>
      </div>
    </header>
  );
}

const headerGroup = cn("flex items-center gap-4.5 lg:gap-7.5");
