import { getPermalink } from "./utils/permalinks";

export const headerData = {
  links: [
    {
      text: "Officers",
      href: getPermalink("/officers"),
    },

    {
      text: "Calendar",
      href: getPermalink("/calendar"),
    },
    {
      text: "Tutoring",
      href: getPermalink("/tutoring"),
    },
    {
      text: "BugSmashers",
      href: getPermalink("/bugsmashers"),
    },
    {
      text: "Archive",
      href: getPermalink("/archive"),
    },

    // ICP TEMP - REMOVE 2/8/26
    ...(new Date() < (new Date("2026-02-08T00:00:00-06:00"))) ?
    [
      {
        text:"IPC 2026",
        href: getPermalink("/ipc26")
      }
    ] : [],

    {
      text: "HackKU⤴",
      href: "https://hackku.org/",
      target: "_blank",
    },
  ],
  actions: [
    {
      text: "Discord",
      href: "https://discord.gg/SgFkFv4bUR",
      target: "_blank",
      variant: "primary",
    },
  ],
};

export const footerData = {
  socialLinks: [
    {
      ariaLabel: "Instagram",
      icon: "tabler:brand-instagram",
      href: "https://www.instagram.com/acm.ku/?hl=en",
    },
    {
      ariaLabel: "LinkedIn",
      icon: "tabler:brand-linkedin",
      href: "https://www.linkedin.com/company/acm-at-ku/",
    },
    {
      ariaLabel: "Discord",
      icon: "tabler:brand-discord",
      href: "https://discord.gg/SgFkFv4bUR",
    },
    {
      ariaLabel: "Linktree",
      icon: "tabler:brand-linktree",
      href: "https://linktr.ee/acmatku",
    },
  ],
  footNote: `
    Made with ❤️ by KU ACM
  `,
};
