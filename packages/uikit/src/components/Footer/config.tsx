import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, YoutubeIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://ryuswap-help.gitbook.io/ryuswap-document/contact-us",
      },
      {
        label: "Blog",
        href: "https://blog.pancakeswap.finance/",
      },
      {
        label: "Community",
        href: "https://ryuswap-help.gitbook.io/ryuswap-document/contact-us/telegram",
      },
      {
        label: "CAKE",
        href: "https://ryuswap-help.gitbook.io/ryuswap-document/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://pancakeswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://ryuswap-help.gitbook.io/ryuswap-document/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://ryuswap-help.gitbook.io/ryuswap-document/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://ryuswap-help.gitbook.io/ryuswap-document/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/pancakeswap",
      },
      {
        label: "Documentation",
        href: "https://ryuswap-help.gitbook.io/ryuswap-document",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://ryuswap-help.gitbook.io/ryuswap-document",
      },
      {
        label: "Careers",
        href: "https://ryuswap-help.gitbook.io/ryuswap-document",
      },
    ],
  },
];

export const socials = [
  // {
  //   label: "Youtube",
  //   icon: YoutubeIcon,
  //   href: "https://www.youtube.com/",
  // },
  // {
  //   label: "Reddit",
  //   icon: RedditIcon,
  //   href: "https://reddit.com/",
  
  // },
  {
    label: "Telegram",
    icon: TelegramIcon,
    href: "https://t.me/",
    
  },
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://x.com/",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "https://discord.gg/",
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://instagram.com/",
    items: [
      {
        label: "",
        icon: InstagramIcon,
        href: "https://instagram.com/",
      }
    ]
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
