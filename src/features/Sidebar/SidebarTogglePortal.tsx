"use client";
import React, {useEffect, useState} from "react";
import {sidebarToggleContainer} from "./sidebarToggleContainer";
import {createPortal} from "react-dom";

type TProps = {
  children: React.ReactNode;
};

export function SidebarTogglePortal({children}: TProps) {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady) {
    return null;
  }

  const portalContainer = document.getElementById(
    sidebarToggleContainer,
  ) as Element;
  return portalContainer && createPortal(children, portalContainer);
}
