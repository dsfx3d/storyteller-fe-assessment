import {SidebarNavItem} from "./SidebarNavItem";
import {SidebarNavMenu} from "./SidebarNavMenu";
import {TSidebarMenu} from "./TSidebarMenu";

type TProps = {
  menu: TSidebarMenu;
  tabIndex?: number;
};

export function SidebarNav({menu, tabIndex}: TProps) {
  return (
    <SidebarNavMenu aria-label={menu.label}>
      {menu.items.map((item, idx) => (
        <SidebarNavItem key={idx} item={item} href="#" tabIndex={tabIndex} />
      ))}
    </SidebarNavMenu>
  );
}
