import { ChainId, chainNames } from '@pancakeswap/chains'
import memoize from 'lodash/memoize'
import {
  Chain,
  arbitrum,
  arbitrumGoerli,
  base,
  baseGoerli,
  bscTestnet,
  bsc as bsc_,
  goerli,
  linea,
  lineaTestnet,
  mainnet,
  opBNB,
  opBNBTestnet,
  polygonZkEvm,
  polygonZkEvmTestnet,
  scrollSepolia,
  zkSync,
  zkSyncTestnet,
} from 'wagmi/chains'

export const CHAIN_QUERY_NAME = chainNames

const CHAIN_QUERY_NAME_TO_ID = Object.entries(CHAIN_QUERY_NAME).reduce((acc, [chainId, chainName]) => {
  return {
    [chainName.toLowerCase()]: chainId as unknown as ChainId,
    ...acc,
  }
}, {} as Record<string, ChainId>)

export const getChainId = memoize((chainName: string) => {
  if (!chainName) return undefined
  return CHAIN_QUERY_NAME_TO_ID[chainName.toLowerCase()] ? +CHAIN_QUERY_NAME_TO_ID[chainName.toLowerCase()] : undefined
})

export const sepolia = {
  id: 11155111,
  name: 'Sepolia Testnet',
  network: 'Sepolia',
  nativeCurrency: { name: 'ETH', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://ethereum-sepolia-rpc.publicnode.com/'],
      // webSocket: ['wss://test-wss.bytexc.org/ws'],
    },
    public: {
      http: ['https://ethereum-sepolia-rpc.publicnode.com/'],
      // webSocket: ['wss://test-wss.bytexc.org/ws'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Sepolia Explorer',
      url: 'https://sepolia.etherscan.io',
    },
  },
  contracts: {
    multicall3: {
      address: '0xf81A26ae65edB8f874Da67D8C3332BD8c7d7E6b4',
      blockCreated: 5911534,
    },
  },
  testnet: true,
} as const satisfies Chain

const bsc = {
  ...bsc_,
  rpcUrls: {
    ...bsc_.rpcUrls,
    public: {
      ...bsc_.rpcUrls.public,
      http: ['https://bsc-dataseed.binance.org/'],
    },
    default: {
      ...bsc_.rpcUrls.default,
      http: ['https://bsc-dataseed.binance.org/'],
    },
  },
} satisfies Chain

/**
 * Controls some L2 specific behavior, e.g. slippage tolerance, special UI behavior.
 * The expectation is that all of these networks have immediate transaction confirmation.
 */
export const L2_CHAIN_IDS: ChainId[] = [
  ChainId.ARBITRUM_ONE,
  ChainId.ARBITRUM_GOERLI,
  ChainId.POLYGON_ZKEVM,
  ChainId.POLYGON_ZKEVM_TESTNET,
  ChainId.ZKSYNC,
  ChainId.ZKSYNC_TESTNET,
  ChainId.LINEA_TESTNET,
  ChainId.LINEA,
  ChainId.BASE,
  ChainId.BASE_TESTNET,
  ChainId.OPBNB,
  ChainId.OPBNB_TESTNET,
]

export const CHAINS = [
  // bsc,
  sepolia
]
