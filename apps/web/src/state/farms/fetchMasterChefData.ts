import chunk from 'lodash/chunk'
import { ChainId } from '@pancakeswap/chains'
import { masterChefV2ABI } from 'config/abi/masterchefV2'
import { publicClient } from 'utils/wagmi'
import { farmFetcher } from 'state/farms'
import { ContractFunctionResult } from 'viem'
import { SerializedFarm } from '@pancakeswap/farms'
import { SerializedFarmConfig } from '../../config/constants/types'
import { getMasterChefV2Address } from '../../utils/addressHelpers'

export const fetchMasterChefFarmPoolLength = async (chainId: number) => {
  try {
    const client = publicClient({ chainId })
    const poolLength = await client.readContract({
      abi: masterChefV2ABI,
      address: getMasterChefV2Address(chainId),
      functionName: 'poolLength',
    })

    return Number(poolLength)
  } catch (error) {
    console.error('Fetch MasterChef Farm Pool Length Error: ', error)
    return 0
  }
}

const masterChefFarmCalls = (farm: SerializedFarm) => {
  const { pid, quoteToken } = farm
  const multiCallChainId = farmFetcher.isTestnet(quoteToken.chainId) ? ChainId.SEPOLIA : ChainId.SEPOLIA
  const masterChefAddress = getMasterChefV2Address(multiCallChainId)
  const masterChefPid = pid

  return masterChefPid || masterChefPid === 0
    ? ([
        {
          abi: masterChefV2ABI,
          address: masterChefAddress,
          functionName: 'poolInfo',
          args: [masterChefPid],
        },
        {
          abi: masterChefV2ABI,
          address: masterChefAddress,
          functionName: 'totalRegularAllocPoint',
        },
      ] as const)
    : ([null, null] as const)
}

export type PoolInfo = ContractFunctionResult<typeof masterChefV2ABI, 'poolInfo'>
export type TotalRegularAllocPoint = ContractFunctionResult<typeof masterChefV2ABI, 'totalRegularAllocPoint'>

export const fetchMasterChefData = async (
  farms: SerializedFarmConfig[],
  chainId: number,
): Promise<[PoolInfo | null, TotalRegularAllocPoint | null][]> => {
  const masterChefCalls = farms.map((farm) => masterChefFarmCalls(farm))
  const chunkSize = masterChefCalls.flat().length / farms.length
  const masterChefAggregatedCalls = masterChefCalls
    .filter((masterChefCall) => masterChefCall[0] !== null && masterChefCall[1] !== null)
    .flat()

  const multiCallChainId = farmFetcher.isTestnet(chainId) ? ChainId.SEPOLIA : ChainId.SEPOLIA
  const client = publicClient({ chainId: multiCallChainId })
  const masterChefMultiCallResult = await client.multicall({
    contracts: masterChefAggregatedCalls,
    allowFailure: false,
  })

  const masterChefChunkedResultRaw = chunk(masterChefMultiCallResult, chunkSize)

  let masterChefChunkedResultCounter = 0
  return masterChefCalls.map((masterChefCall) => {
    if (masterChefCall[0] === null && masterChefCall[1] === null) {
      return [null, null]
    }
    const data = masterChefChunkedResultRaw[masterChefChunkedResultCounter] as [PoolInfo, TotalRegularAllocPoint]
    masterChefChunkedResultCounter++
    return data
  })
}
