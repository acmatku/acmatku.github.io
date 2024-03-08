import { getPermalink, getAsset } from "./utils/permalinks";

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
      text: "bugSmashers",
      href: getPermalink("/bugsmashers"),
    },
    {
      text: "HackKU",
      href: "https://hackku.org/",
      target: "_blank",
    },
  ],
  actions: [
    {
      text: "Discord",
      href: "https://discord.com/invite/yhRshEnJUB",
      target: "_blank",
      variant: "primary",
      icon: "tabler:brand-discord",
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
      href: "https://discord.com/invite/yhRshEnJUB",
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
