import {type LucideIcon} from "lucide-react";

export type TSidebarMenu = {
  label: string;
  items: Array<{
    title: string;
    icon: LucideIcon;
  }>;
};
