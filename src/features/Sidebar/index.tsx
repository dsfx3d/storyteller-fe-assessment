"use client";
import {useEffect} from "react";
import {AnOverlay} from "~/components/atoms/AnOverlay";
import {MHamburgerToggle} from "~/components/molecules/MHamburgerToggle";
import {SidebarNav} from "~/features/Sidebar/SidebarNav";
import {sidebarNavMenus} from "~/features/Sidebar/sidebarNavMenus";
import {useIsBreakpoint} from "~/hooks/useIsBreakpoint";
import {useToggle} from "~/hooks/useToggle";
import {cn} from "~/lib/utils";
import {SidebarTogglePortal} from "./SidebarTogglePortal";
import {EBreakpoints} from "~/lib/enums/EBreakpoints";
import {sidebarZIndex} from "./sidebarZIndex";

const sidebarNavId = "sidebar-nav";

export function Sidebar() {
  const isTablet = useIsBreakpoint(EBreakpoints.Tablet);
  const [isOpen, toggleIsOpen, setIsOpen] = useToggle(false);
  useEffect(() => {
    isTablet !== undefined && setIsOpen(!isTablet);
  }, [isTablet]);
  return (
    <>
      <SidebarTogglePortal>
        <MHamburgerToggle
          size={32}
          color="white"
          className="desktop:scale-x-0"
          value={isOpen}
          onToggle={toggleIsOpen}
          aria-expanded={isOpen}
          aria-controls={sidebarNavId}
          tabIndex={0}
        />
      </SidebarTogglePortal>
      <SidebarNav
        id={sidebarNavId}
        aria-hidden={!isOpen}
        className={toSidebar(isOpen)}
        menus={sidebarNavMenus}
      />
      <AnOverlay
        className="top-[60px] h-[calc(100vh_-_60px)] z-40"
        onClick={toggleIsOpen}
        isOpen={isOpen && isTablet}
      />
    </>
  );
}

const toSidebar = (isOpen: boolean) =>
  cn(
    `z-[50] bg-primary min-w-[228px] h-[calc(100vh_-_60px)]`,
    "absolute desktop:relative",
    "transition-transform desktop:transition-none",
    {
      "translate-x-[-100%] scale-x-0": !isOpen,
    },
  );
