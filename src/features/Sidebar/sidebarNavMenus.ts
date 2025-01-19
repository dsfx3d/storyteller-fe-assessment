import {
  Book,
  CalendarDays,
  ChartLine,
  Code2,
  IdCard,
  Joystick,
  Megaphone,
  Users2,
} from "lucide-react";
import {TSidebarMenu} from "./TSidebarMenu";

export const appMenu: TSidebarMenu = {
  label: "Application Menu",
  items: [
    {
      icon: CalendarDays,
      title: "Schedule",
    },
    {
      icon: ChartLine,
      title: "Analytics",
    },
    {
      icon: Book,
      title: "Stories",
    },
    {
      icon: Joystick,
      title: "Engagement Units",
    },
    {
      icon: Megaphone,
      title: "Ads",
    },
  ],
};

export const adminMenu: TSidebarMenu = {
  label: "Admin Menu",
  items: [
    {
      icon: Users2,
      title: "CMS Users",
    },
    {
      icon: IdCard,
      title: "Roles",
    },
    {
      icon: Code2,
      title: "Apps",
    },
  ],
};
