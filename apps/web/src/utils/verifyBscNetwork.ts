import { ChainId } from '@pancakeswap/chains'

export const verifyBscNetwork = (chainId?: number) => {
  return Boolean(chainId && (chainId === ChainId.BYTE_TESTNET || chainId === ChainId.BYTE_TESTNET))
}
