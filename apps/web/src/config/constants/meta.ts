import memoize from 'lodash/memoize'
import { ContextApi } from '@pancakeswap/localization'
import { PageMeta } from './types'
import { ASSET_CDN, HERO_CDN } from './endpoints'

export const DEFAULT_META: PageMeta = {
  title: 'ByteSwap',
  description:
    'The most popular AMM by user count! Earn BEXC through yield farming, then stake it in Pools to earn more tokens!',
  image: `${HERO_CDN}/hero.png`,
}

interface PathList {
  paths: { [path: string]: { title: string; basePath?: boolean; description?: string; image?: string } }
  defaultTitleSuffix: string
}

const getPathList = (t: ContextApi['t']): PathList => {
  return {
    paths: {
      '/': { title: t('Home') },
      '/swap': { basePath: true, title: t('Exchange'), image: `${HERO_CDN}/hero.png` },
      '/limit-orders': { basePath: true, title: t('Limit Orders'), image: `${HERO_CDN}/hero.png` },
      '/add': { basePath: true, title: t('Add Liquidity'), image: `${HERO_CDN}/hero.png` },
      '/remove': { basePath: true, title: t('Remove Liquidity'), image: `${HERO_CDN}/hero.png` },
      '/liquidity': { title: t('Liquidity'), image: `${HERO_CDN}/hero.png` },
      '/find': { title: t('Import Pool') },
      '/competition': { title: t('Trading Battle') },
      '/prediction': { title: t('Prediction'), image: `${HERO_CDN}/hero.png` },
      '/prediction/leaderboard': { title: t('Leaderboard'), image: `${HERO_CDN}/hero.png` },
      '/farms': { title: t('Farms'), image: `${HERO_CDN}/hero.png` },
      '/farms/auction': { title: t('Farm Auctions'), image: `${HERO_CDN}/hero.png` },
      '/pools': { title: t('Pools'), image: `${HERO_CDN}/hero.png` },
      '/lottery': { title: t('Lottery'), image: `${HERO_CDN}/hero.png` },
      '/ifo': { title: t('Initial Farm Offering'), image: `${HERO_CDN}/hero.png` },
      '/teams': { basePath: true, title: t('Leaderboard'), image: `${HERO_CDN}/hero.png` },
      '/voting': { basePath: true, title: t('Voting'), image: `${HERO_CDN}/hero.png` },
      '/voting/proposal': { title: t('Proposals'), image: `${HERO_CDN}/hero.png` },
      '/voting/proposal/create': { title: t('Make a Proposal'), image: `${HERO_CDN}/hero.png` },
      '/info': {
        title: `${t('Overview')} - ${t('Info')}`,
        description: 'View statistics for Pancakeswap exchanges.',
        image: `${HERO_CDN}/hero.pngpg`,
      },
      '/info/pairs': {
        title: `${t('Pairs')} - ${t('Info')}`,
        description: 'View statistics for Pancakeswap exchanges.',
        image: `${HERO_CDN}/hero.pngpg`,
      },
      '/info/tokens': {
        title: `${t('Tokens')} - ${t('Info')}`,
        description: 'View statistics for Pancakeswap exchanges.',
        image: `${HERO_CDN}/hero.pngpg`,
      },
      '/nfts': { title: t('NFT Marketplace'), image: `${HERO_CDN}/hero.png` },
      '/nfts/collections': { basePath: true, title: t('Collections'), image: `${HERO_CDN}/hero.png` },
      '/nfts/activity': { title: t('Activity'), image: `${HERO_CDN}/hero.png` },
      '/profile': { basePath: true, title: t('Profile') },
      '/pancake-squad': { basePath: true, title: t('Pancake Squad') },
      '/pottery': { basePath: true, title: t('Pottery'), image: `${HERO_CDN}/hero.png` },
    },
    defaultTitleSuffix: t('PancakeSwap'),
  }
}

export const getCustomMeta = memoize(
  (path: string, t: ContextApi['t'], _: string): PageMeta => {
    const pathList = getPathList(t)
    const pathMetadata =
      pathList.paths[path] ??
      pathList.paths[Object.entries(pathList.paths).find(([url, data]) => data.basePath && path.startsWith(url))?.[0]]

    if (pathMetadata) {
      return {
        title: `${pathMetadata.title}`,
        ...(pathMetadata.description && { description: pathMetadata.description }),
        image: pathMetadata.image,
      }
    }
    return null
  },
  (path, t, locale) => `${path}#${locale}`,
)
