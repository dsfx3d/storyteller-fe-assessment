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
import {globalHeaderHeight} from "../GlobalHeader/globalHeaderHeight";

const sidebarNavId = "sidebar-nav";
const sidebarZIndex = 9999;

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
        className={cn(
          `top-[${globalHeaderHeight}]`,
          `h-[calc(100vh_-_${globalHeaderHeight})]`,
          `z-[${sidebarZIndex - 1}]`,
        )}
        onClick={toggleIsOpen}
        isOpen={isOpen && isTablet}
      />
    </>
  );
}

const toSidebar = (isOpen: boolean) =>
  cn(
    `z-[${sidebarZIndex}] bg-primary w-[228px] h-[calc(100%_-_${globalHeaderHeight})]`,
    "absolute desktop:relative",
    "transition-transform desktop:transition-none",
    {
      "translate-x-[-100%] scale-x-0": !isOpen,
    },
  );
