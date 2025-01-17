import {
  Book,
  CalendarDays,
  ChartLine,
  Code2,
  HelpCircle,
  IdCard,
  Joystick,
  Megaphone,
  Users2,
} from "lucide-react";
import {TSidebarMenu} from "./TSidebarMenu";

const menu1: TSidebarMenu = {
  label: "Menu 1",
  items: [
    {
      url: "#",
      icon: CalendarDays,
      title: "Schedule",
    },
    {
      url: "#",
      icon: ChartLine,
      title: "Analytics",
    },
    {
      url: "/",
      icon: Book,
      title: "Stories",
    },
    {
      url: "#",
      icon: Joystick,
      title: "Engagement Units",
    },
    {
      url: "#",
      icon: Megaphone,
      title: "Ads",
    },
  ],
};

const menu2: TSidebarMenu = {
  label: "Menu 2",
  items: [
    {
      icon: Users2,
      title: "CMS Users",
      url: "#",
    },
    {
      icon: IdCard,
      title: "Roles",
      url: "#",
    },
    {
      icon: Code2,
      title: "Apps",
      url: "#",
    },
  ],
};

const menu3: TSidebarMenu = {
  label: "Menu 3",
  items: [
    {
      icon: HelpCircle,
      title: "User Guide",
      url: "#",
    },
  ],
};

export const sidebarNavMenus: TSidebarMenu[] = [menu1, menu2, menu3];
