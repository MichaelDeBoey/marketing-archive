import type { Card } from "./types";

export const cards: Card[] = [
  {
    icon: "ri-questionnaire-line bg-green text-green bg-opacity-10 text-5xl",
    header: "Ask us a money question and we’ll cover it in the pod",
    href: "/ask",
    cta: "Ask money question",
  },
  {
    icon: "ri-twitter-fill bg-twitter text-white text-5xl",
    header: "Follow on Twitter",
    href: "https://twitter.com/maybe",
    cta: "Follow @maybe",
  },
  {
    icon: "ri-earth-line bg-green text-green bg-opacity-10 text-5xl",
    header: "Join the Community",
    href: "https://maybe.co/community",
    cta: "Join community",
  },
  {
    icon: "ri-calculator-line bg-red text-red bg-opacity-10 text-5xl",
    header: "Check out our mini-tools",
    href: "/tools",
    cta: "See all tools",
  },
];
