import { getPermalink, getAsset } from "./utils/permalinks";

export const headerData = {
  links: [
    {
      text: "About Us",
      href: getPermalink("/"),
    },
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
      icon: "tabler:link",
      href: "https://linktr.ee/acmatku",
    },
  ],
  footNote: `
    Made with ❤️ by KU ACM
  `,
};
