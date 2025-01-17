import {LucideIcon} from "lucide-react";

export type TSidebarMenu = {
  label: string;
  items: Array<{
    url: string;
    title: string;
    icon: LucideIcon;
  }>;
};
