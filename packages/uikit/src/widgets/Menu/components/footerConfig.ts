import { ContextApi } from "@pancakeswap/localization";
import { FooterLinkType } from "../../../components/Footer/types";

export const footerLinks: (t: ContextApi["t"]) => FooterLinkType[] = (t) => [
  {
    label: t("TOOLS"),
    items: [
      {
        label: t("Swap"),
        href: "/swap",
      },
      {
        label: t("Liquidity"),
        href: "/liquidity",
      },
      {
        label: t("Pools"),
        href: "/pools",
      },
      {
        label: t("Farm"),
        href: "/farms",
      },
      {
        label: t("Staking"),
        href: "/simple-staking",
      },
      {
        label: t("Info Tokens"),
        href: "/info",
      },
    ],
  },
  {
    label: "Byte XC ecosystem",
    items: [
      {
        label: t("Byte XC"),
        href: "https://bytexc.io",
      },
      {
        label: t("Byte Exchange"),
        href: "https://bexc.io/",
      },
      {
        label: t("XChain"),
        href: "https://bytescan.io",
      },
      {
        label: t("Testnet"),
        href: "https://bytescan.io",
      },
      {
        label: t("XCoin"),
        href: "https://bytexc.io/xcoin-bexc",
      },
      {
        label: t("Faucet"),
        href: "https://faucet.bytexc.io",
      },
      {
        label: t("XBridge"),
        href: "https://xbridge.me",
      },
      {
        label: t("Kupr"),
        href: "https://kupr.io",
      },
      {
        label: t("Byte MX"),
        href: "https://bytemx.io",
      },
      {
        label: t("Bytepad"),
        href: "https://bytepad.io",
      },
      {
        label: t("Vault (Coming Soon)"),
        href: "#",
      },
      {
        label: t("Vision (Coming Soon)"),
        href: "#",
      },
    ],
  },
  // {
  //   label: t("Developers"),
  //   items: [
  //     {
  //       label: t("Contributing"),
  //       href: "#",
  //     },
  //     {
  //       label: t("Github"),
  //       href: "#",
  //     },
  //     {
  //       label: t("Bug Bounty"),
  //       href: "#",
  //     },
  //     {
  //       label: t("Loremip"),
  //       href: "#",
  //     },
  //   ],
  // },
  {
    label: t("Support"),
    items: [
      {
        label: t("Contact"),
        href: "https://bytexc.io/contact",
      },
      // {
      //   label: t("Troubleshooting"),
      //   href: "#",
      // },
      {
        label: t("Documentations"),
        href: "https://byteswap-help.gitbook.io/byteswap-document",
      },
    ],
  },
  {
    label: t("About"),
    items: [
      {
        label: t("Terms Of Service"),
        href: "https://byteswap-help.gitbook.io/byteswap-document/terms-and-services",
      },
      {
        label: t("Brand assets"),
        href: "https://meadow-poison-758.notion.site/BYTE-XC-Brand-Guide-e636641c2ccf4e20b0ca2c453fdf51e3",
      },
      {
        label: t("Blog"),
        href: "https://kupr.io/",
      },
      // {
      //   label: t("Brand Assets"),
      //   href: "https://meadow-poison-758.notion.site/BYTE-XC-Brand-Guide-e636641c2ccf4e20b0ca2c453fdf51e3",
      // },
    ],
  },
];
