"use client";
import {AnOverlay} from "~/components/atoms/AnOverlay";
import {EBreakpoints} from "~/lib/enums/EBreakpoints";
import {MHamburgerToggle} from "~/components/molecules/MHamburgerToggle";
import {SidebarNav} from "~/features/Sidebar/SidebarNav";
import {SidebarTogglePortal} from "./SidebarTogglePortal";
import {cn} from "~/lib/utils";
import {sidebarNavMenus} from "~/features/Sidebar/sidebarNavMenus";
import {useEffect} from "react";
import {useIsBreakpoint} from "~/hooks/useIsBreakpoint";
import {useToggle} from "~/hooks/useToggle";

const sidebarNavId = "sidebar-nav";

export function Sidebar() {
  const isTablet = useIsBreakpoint(EBreakpoints.lg);
  const [isOpen, toggleIsOpen, setIsOpen] = useToggle(false);
  useEffect(() => {
    if (isTablet !== undefined) {
      setIsOpen(!isTablet);
    }
  }, [isTablet, setIsOpen]);

  // disable body scroll when sidebar is open on tablet and below
  useEffect(() => {
    document.body.style.overflow = isTablet && isOpen ? "hidden" : "auto";
  }, [isTablet, isOpen]);
  return (
    <>
      <SidebarTogglePortal>
        <MHamburgerToggle
          size={32}
          color="white"
          className="lg:scale-x-0"
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
      <AnOverlay onClick={toggleIsOpen} isOpen={isOpen && isTablet} />
    </>
  );
}

const toSidebar = (isOpen: boolean) =>
  cn(
    `z-[50] bg-primary min-w-[228px] h-[calc(100vh_-_60px)]`,
    "absolute lg:relative",
    "transition-transform lg:transition-none",
    {
      "translate-x-[-100%] scale-x-0": !isOpen,
    },
  );
