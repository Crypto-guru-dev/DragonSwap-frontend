import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | ByteSwap',
  defaultTitle: 'ByteSwap',
  description: 'Trade, earn, and own crypto on the all-in-one multichain DEX',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@ByteSwap',
    site: '@ByteSwap',
  },
  openGraph: {
    title: "ByteSwap - Everyone's Favorite DEX",
    description: 'Trade, earn, and own crypto on the all-in-one multichain DEX',
    images: [{ url: 'https://assets.ryuswap.com/hero.png' }],
  },
}
