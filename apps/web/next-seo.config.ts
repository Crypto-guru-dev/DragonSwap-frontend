import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | DragonSwap',
  defaultTitle: 'DragonSwap',
  description: 'Trade, earn, and own crypto on the all-in-one multichain DEX',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@DragonSwap',
    site: '@DragonSwap',
  },
  openGraph: {
    title: "DragonSwap - Everyone's Favorite DEX",
    description: 'Trade, earn, and own crypto on the all-in-one multichain DEX',
    images: [{ url: 'https://assets.ryuswap.com/hero.png' }],
  },
}
