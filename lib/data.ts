import { LinkItem } from "./types";

export const links: readonly LinkItem[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Lists",
    link: "/lists",
  },
  {
    name: "Social",
    link: "/social",
  },
  {
    name: "Library",
    link: "/library",
  },
] as const;
