import memoize from 'lodash/memoize'
import { Token } from '@pancakeswap/sdk'
import { ChainId } from '@pancakeswap/chains'
import { safeGetAddress } from 'utils'
import { isAddress } from 'viem'

const mapping = {
  [ChainId.BSC]: 'smartchain',
  [ChainId.BYTE_TESTNET]: 'byte',
  [ChainId.ETHEREUM]: 'ethereum',
  [ChainId.POLYGON_ZKEVM]: 'polygonzkevm',
  [ChainId.ZKSYNC]: 'zksync',
  [ChainId.ARBITRUM_ONE]: 'arbitrum',
  [ChainId.LINEA]: 'linea',
}

const getTokenLogoURL = memoize(
  (token?: Token) => {
    if (token && mapping[token.chainId] && isAddress(token.address)) {
      return `https://asset.byteswap.finance/images/${mapping[token.chainId]}/${safeGetAddress(
        token.address,
      )}.png`
    }
    return null
  },
  (t) => `${t?.chainId}#${t?.address}`,
)

export const getTokenLogoURLByAddress = memoize(
  (address?: string, chainId?: number) => {
    if (address && chainId && mapping[chainId] && isAddress(address)) {
      return `https://asset.byteswap.finance/images/${mapping[chainId]}/${safeGetAddress(
        address,
      )}.png`
    }
    return null
  },
  (address, chainId) => `${chainId}#${address}`,
)

export default getTokenLogoURL
