"use client";
import {createPortal} from "react-dom";
import {sidebarToggleContainer} from "./sidebarToggleContainer";
import React, {useEffect, useState} from "react";

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

  const portalContainer = document.querySelector(`#${sidebarToggleContainer}`);
  return portalContainer && createPortal(children, portalContainer);
}
