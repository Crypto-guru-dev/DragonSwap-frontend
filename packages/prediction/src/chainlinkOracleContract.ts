import { ChainId } from '@pancakeswap/chains'
import { Address } from 'viem'
import { SupportedChainId } from './constants/supportedChains'
import { ContractAddresses } from './type'

export const chainlinkOracleBNB: Record<string, Address> = {
  [ChainId.BSC]: '0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE',
  [ChainId.ZKSYNC]: '0x',
} as const satisfies ContractAddresses<SupportedChainId>

export const chainlinkOracleCAKE: Record<string, Address> = {
  [ChainId.BSC]: '0x36dce3FC47bD66Cf55750d6773867B31155520bA',
  [ChainId.ZKSYNC]: '0x',
} as const satisfies ContractAddresses<SupportedChainId>

export const chainlinkOracleETH: Record<string, Address> = {
  [ChainId.BSC]: '0x',
  [ChainId.ZKSYNC]: '0x',
} as const satisfies ContractAddresses<SupportedChainId>
