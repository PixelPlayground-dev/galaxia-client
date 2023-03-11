import { IMenuItem } from "../types/IMenuItem";
import ChampagneGlassesIcon from "../assets/icons/ChampagneGlassesIcon";
import GearIcon from "../assets/icons/GearIcon";

export const routePaths = {
  home: "/",
  login: "/login",
  signup: "/signup",
  settings: "/settings",
};

export const BREAKPOINTS = {
  mobile: 768,
};

export const menuItems: IMenuItem[] = [
  {
    label: "Events",
    route: routePaths.home,
    icon: ChampagneGlassesIcon,
  },
  {
    label: "Settings",
    route: routePaths.settings,
    icon: GearIcon,
  },
];
