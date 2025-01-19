"use client";
import {AnOverlay} from "~/components/atoms/AnOverlay";
import {EBreakpoints} from "~/lib/enums/EBreakpoints";
import {MHamburgerToggle} from "~/components/molecules/MHamburgerToggle";
import {Sidebar} from "./Sidebar";
import {SidebarTogglePortal} from "./SidebarTogglePortal";
import {useEffect, useRef} from "react";
import {useIsBreakpoint} from "~/hooks/useIsBreakpoint";
import {useToggle} from "~/hooks/useToggle";

const sidebarNavId = "sidebar-nav";

export function GlobalSidebar() {
  const toggleBtnRef = useRef<SVGSVGElement>(null);
  const isSmallScreen = useIsBreakpoint(EBreakpoints.lg);
  const [isSidebarExpanded, toggleSidebar, setIsSidebarExpanded] =
    useToggle(true);

  useEffect(() => {
    if (isSmallScreen) {
      // collapse the sidebar when screen shrinks to tablet and below
      setIsSidebarExpanded(false);
    } else {
      // expand the sidebar when screen grows to desktop
      setIsSidebarExpanded(true);
    }
  }, [isSmallScreen, setIsSidebarExpanded]);

  // disable body scroll when sidebar is open on tablet and below
  useEffect(() => {
    document.body.style.overflow =
      isSmallScreen && isSidebarExpanded ? "hidden" : "auto";
  }, [isSmallScreen, isSidebarExpanded]);

  return (
    <>
      <SidebarTogglePortal>
        <MHamburgerToggle
          ref={toggleBtnRef}
          size={32}
          color="white"
          className="lg:scale-x-0"
          value={isSidebarExpanded}
          onToggle={toggleSidebar}
          aria-expanded={isSidebarExpanded}
          aria-controls={sidebarNavId}
          tabIndex={0}
        />
      </SidebarTogglePortal>
      <Sidebar
        isOpen={isSidebarExpanded}
        isModal={isSmallScreen}
        id={sidebarNavId}
        role={isSmallScreen ? "dialog" : "navigation"}
        aria-hidden={!isSidebarExpanded}
        onTrapFocus={() => toggleBtnRef.current?.focus()}
      />
      <AnOverlay
        onClick={toggleSidebar}
        isOpen={isSidebarExpanded && isSmallScreen}
      />
    </>
  );
}
