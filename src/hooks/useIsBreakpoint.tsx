import {useEffect, useState} from "react";

export function useIsBreakpoint(breakpoint: number) {
  const [isBreakpoint, setIsBreakpoint] = useState<boolean | undefined>(
    undefined,
  );

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const onChange = () => {
      setIsBreakpoint(window.innerWidth < breakpoint);
    };
    mql.addEventListener("change", onChange);
    setIsBreakpoint(window.innerWidth < breakpoint);
    return () => mql.removeEventListener("change", onChange);
  }, [breakpoint]);

  return isBreakpoint;
}
