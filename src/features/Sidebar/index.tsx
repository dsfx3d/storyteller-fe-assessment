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
  const isLessThanLg = useIsBreakpoint(EBreakpoints.lg);
  const [isOpen, toggleIsOpen, setIsOpen] = useToggle(true);
  useEffect(() => {
    if (isLessThanLg !== undefined) {
      setIsOpen(!isLessThanLg);
    }
  }, [isLessThanLg, setIsOpen]);

  // disable body scroll when sidebar is open on tablet and below
  useEffect(() => {
    document.body.style.overflow = isLessThanLg && isOpen ? "hidden" : "auto";
  }, [isLessThanLg, isOpen]);
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
        className={toSidebar(isOpen && isLessThanLg)}
        menus={sidebarNavMenus}
      />
      <AnOverlay onClick={toggleIsOpen} isOpen={isOpen && isLessThanLg} />
    </>
  );
}

const toSidebar = (isOpen?: boolean) =>
  cn(
    `z-[50] bg-primary min-w-[228px] h-[calc(100vh_-_60px)]`,
    "absolute lg:relative",
    "scale-x-0 lg:scale-x-100",
    "translate-x-[-100%] lg:translate-x-0",
    "transition-transform lg:transition-none",
    {
      "translate-x-0 scale-x-100": isOpen,
    },
  );
