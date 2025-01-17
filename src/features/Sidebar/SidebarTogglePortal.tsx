import React from "react";
import {sidebarToggleContainer} from "./sidebarToggleContainer";
import {createPortal} from "react-dom";

type TProps = {
  children: React.ReactNode;
};

export function SidebarTogglePortal({children}: TProps) {
  const portalContainer = document.getElementById(
    sidebarToggleContainer,
  ) as Element;
  return portalContainer && createPortal(children, portalContainer);
}
