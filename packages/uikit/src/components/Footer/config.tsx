import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, YoutubeIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://byteswap-help.gitbook.io/byteswap-document/contact-us",
      },
      {
        label: "Blog",
        href: "https://blog.pancakeswap.finance/",
      },
      {
        label: "Community",
        href: "https://byteswap-help.gitbook.io/byteswap-document/contact-us/telegram",
      },
      {
        label: "CAKE",
        href: "https://byteswap-help.gitbook.io/byteswap-document/tokenomics/cake",
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
        href: "Support https://byteswap-help.gitbook.io/byteswap-document/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://byteswap-help.gitbook.io/byteswap-document/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://byteswap-help.gitbook.io/byteswap-document/get-started",
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
        href: "https://byteswap-help.gitbook.io/byteswap-document",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://byteswap-help.gitbook.io/byteswap-document",
      },
      {
        label: "Careers",
        href: "https://byteswap-help.gitbook.io/byteswap-document",
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
    href: "https://t.me/bytedexglobal",
    
  },
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://x.com/byteexchange",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "https://discord.gg/DcbBFChX",
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://instagram.com/byteexchange",
    items: [
      {
        label: "",
        icon: InstagramIcon,
        href: "https://instagram.com/byteexchange",
      }
    ]
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
