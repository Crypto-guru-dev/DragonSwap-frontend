import { ChainId } from '@pancakeswap/chains'

export const verifyBscNetwork = (chainId?: number) => {
  return Boolean(chainId && (chainId === ChainId.SEPOLIA || chainId === ChainId.SEPOLIA))
}
