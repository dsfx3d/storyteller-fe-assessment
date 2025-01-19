import {HelpCircle} from "lucide-react";
import {IO} from "fp-ts/lib/IO";
import {SidebarNav} from "./SidebarNav";
import {SidebarNavItem} from "./SidebarNavItem";
import {SidebarNavMenu} from "./SidebarNavMenu";
import {TSidebarMenu} from "./TSidebarMenu";
import {adminMenu, appMenu} from "./sidebarNavMenus";
import {cn} from "~/lib/utils";
import {useCallback} from "react";

type TProps = React.ComponentProps<"aside"> & {
  isModal?: boolean;
  isOpen: boolean;
  onTrapFocus: IO<void>;
};

export function Sidebar({isOpen, isModal, onTrapFocus, ...asideProps}: TProps) {
  const tabIndex = isOpen ? 0 : -1;
  const trapFocus: React.FocusEventHandler = useCallback(
    e => {
      // trap focus within sidebar when it's a modal
      if (isModal) {
        e.preventDefault();
        onTrapFocus();
      }
    },
    [isModal, onTrapFocus],
  );
  return (
    <aside
      {...asideProps}
      className={cn("global-sidebar", {
        "translate-x-0 scale-x-100": isOpen && isModal,
      })}
    >
      <SidebarNav menu={appMenu} tabIndex={tabIndex} />
      <SidebarNav menu={adminMenu} tabIndex={tabIndex} />
      <SidebarNavMenu>
        <SidebarNavItem
          href="#"
          item={userGuideNavItem}
          tabIndex={tabIndex}
          onBlur={trapFocus}
        />
      </SidebarNavMenu>
    </aside>
  );
}

const userGuideNavItem: TSidebarMenu["items"][number] = {
  icon: HelpCircle,
  title: "User Guide",
};
