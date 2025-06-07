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
    name: "Chatbot",
    link: "/chatbot",
  },
  {
    name: "Library",
    link: "/library",
  },
  {
    name: "Dashboard",
    link: "/dashboard",
  },
] as const;
