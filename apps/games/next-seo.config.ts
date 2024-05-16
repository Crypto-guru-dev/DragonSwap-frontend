import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | PancakeSwap',
  defaultTitle: 'Game | PancakeSwap',
  description: 'Play different games on PancakeSwap, using CAKE and PancakeSwap NFTs',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@PancakeSwap',
    site: '@PancakeSwap',
  },
  openGraph: {
    title: "DragonSwap - Everyone's Favorite DEX",
    description: 'The most popular AMM by user count! Earn ETH through yield farming, then stake it in Pools to earn more tokens!',
    images: [{ url: 'https://assets.ryuswap.com/hero.png' }],
  },
}
