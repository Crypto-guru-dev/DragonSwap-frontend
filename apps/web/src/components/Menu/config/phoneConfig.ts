import { SUPPORTED_CHAIN_IDS as IFO_SUPPORTED_CHAINS } from '@pancakeswap/ifos'
import { ContextApi } from '@pancakeswap/localization'
import { SUPPORTED_CHAIN_IDS as POOL_SUPPORTED_CHAINS, SUPPORTED_CHAIN_IDS } from '@pancakeswap/pools'
import { SUPPORTED_CHAIN_IDS as POSITION_MANAGERS_SUPPORTED_CHAINS } from '@pancakeswap/position-managers'
import { SUPPORTED_CHAIN_IDS as PREDICTION_SUPPORTED_CHAINS } from '@pancakeswap/prediction'
import {
  DropdownMenuItemType,
  DropdownMenuItems,
  EarnFillIcon,
  EarnIcon,
  FarmIcon,
  LiquidityIcon,
  MenuItemsType,
  MoreIcon,
  NftFillIcon,
  NftIcon,
  PancakeProtectorIcon,
  PoolIcon,
  PoolsIcon,
  StakingIcon,
  SwapFillIcon,
  SwapIcon,
} from '@pancakeswap/uikit'
import {
  FIXED_STAKING_SUPPORTED_CHAINS,
  LIQUID_STAKING_SUPPORTED_CHAINS,
  SUPPORT_BUY_CRYPTO,
  SUPPORT_CAKE_STAKING,
  SUPPORT_FARMS,
  SUPPORT_ONLY_BSC,
} from 'config/constants/supportChains'
import { getPerpetualUrl } from 'utils/getPerpetualUrl'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & { hideSubNav?: boolean }
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & { hideSubNav?: boolean; image?: string } & {
  items?: ConfigMenuDropDownItemsType[]
}

const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const phoneConfig: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, isDark, languageCode, chainId) =>
  [
    {
      label: t('Trade'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: '/swap',
      showItemsOnMobile: false,
      items: [
        {
          label: t('Swap'),
          href: '/swap',
        },
        {
          label: t('Liquidity'),
          href: '/liquidity',
        },
        {
          label: t('Pools'),
          href: '/pools',
        },
        {
          label: t('Farm'),
          href: '/farms',
        },
        {
          label: t('Staking'),
          href: '/simple-staking',
        },
        // {
        //   label: t('Top Tokens'),
        //   href: '/info',
        // },
        {
          label: t(''),
          href: '/add',
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Liquidity'),
      href: '/liquidity',
      icon: LiquidityIcon,
      fillIcon: EarnFillIcon,
      supportChainIds: POOL_SUPPORTED_CHAINS,
      showItemsOnMobile: false,
      items: [
        {
          label: t(''),
          href: '/liquidity',
        },
      ]
    },
    {
      label: t('Pools'),
      href: '/pools',
      icon: PoolsIcon,
      fillIcon: EarnFillIcon,
      supportChainIds: SUPPORT_ONLY_BSC,
      showItemsOnMobile: false,
      items: [
        {
          label: t(''),
          href: '/pools',
        },
      ]
    },
    {
      label: t('Staking'),
      href: '/simple-staking',
      icon: StakingIcon,
      fillIcon: EarnFillIcon,
      supportChainIds: SUPPORT_FARMS,
      showItemsOnMobile: false,
      items: [
        {
          label: t(''),
          href: '/simple-staking',
        },
      ]
    },
    {
      label: t('Farms'),
      href: '/farms',
      icon: FarmIcon,
      fillIcon: EarnFillIcon,
      supportChainIds: FIXED_STAKING_SUPPORTED_CHAINS,
      showItemsOnMobile: false,
      items: [
        {
          label: t(''),
          href: '/farms',
        },
      ]
    },
    
    // {
    //   label: t('Info'),
    //   href: '/info/v2',
    //   icon: EarnIcon,
    //   fillIcon: EarnFillIcon,
    //   showItemsOnMobile: false,
    //   items: [
    //     {
    //       label: t(''),
    //       href: '/simple-staking',
    //     },
    //   ]
    // }
  ].map((item) => addMenuItemSupported(item, chainId))

export default phoneConfig
