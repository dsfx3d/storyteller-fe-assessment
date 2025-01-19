import {Book} from "lucide-react";
import {TSidebarMenu} from "./TSidebarMenu";
import {cn} from "~/lib/utils";

type TProps = React.ComponentProps<"a"> & {
  item: TSidebarMenu["items"][number];
};

export function SidebarNavItem({item, className, ...linkProps}: TProps) {
  return (
    <a
      {...linkProps}
      className={cn(
        "flex px-4.5 py-4.5 gap-2 border-l-4 border-l-transparent items-center",
        {
          "border-[#77a0f0] bg-[#292f48]": item.icon === Book,
        },
        className,
      )}
    >
      <item.icon className="w-4.5 h-4.5 text-[#77a0f0]" />
      <span className="text-sm text-white">{item.title}</span>
    </a>
  );
}
