import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | PancakeSwap',
  defaultTitle: 'Blog | PancakeSwap',
  description: 'Trade, earn, and own crypto on the all-in-one multichain DEX',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@PancakeSwap',
    site: '@PancakeSwap',
  },
  openGraph: {
    title: "ByteSwap - Everyone's Favorite DEX",
    description: 'The most popular AMM by user count! Earn BEXC through yield farming, then stake it in Pools to earn more tokens!',
    images: [{ url: 'https://asset.byteswap.finance/hero.png' }],
  },
}
