import {cn} from "~/lib/utils";
import {TSidebarMenu} from "./TSidebarMenu";

type TProps = React.ComponentProps<"nav"> & {
  menus: TSidebarMenu[];
};

export function SidebarNav({menus, ...navProps}: TProps) {
  return (
    <nav {...navProps}>
      {menus.map((menu, menuIdx) => (
        <ul
          key={`menu-${menuIdx}`}
          className="flex flex-col py-5 border-t"
          style={{
            borderImage:
              "linear-gradient(to right, #484848 0%, transparent 100%) 1",
          }}
          aria-label={menu.label}
        >
          {menu.items.map((item, idx) => (
            <li key={idx}>
              <a
                href="#"
                className={cn(
                  "flex px-4.5 py-4.5 gap-2 border-l-4 border-l-transparent items-center",
                  {
                    "border-[#77a0f0] bg-[#292f48]": item.url === "/",
                  },
                )}
              >
                <item.icon className="w-4.5 h-4.5 text-[#77a0f0]" />
                <span className="text-sm text-white">{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      ))}
    </nav>
  );
}
