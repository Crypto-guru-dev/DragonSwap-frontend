import { sepoliaTokens } from '@pancakeswap/tokens'
import { getAddress } from 'viem'

import { PoolCategory, SerializedPool } from '../../types'

export const livePools: SerializedPool[] = [
  // {
  //   sousId: 1,
  //   stakingToken: sepoliaTokens.cake,
  //   earningToken: sepoliaTokens.usdt,
  //   contractAddress: '0xAA7E271dDC1C516eE2FDe75868342e943bfD451A',
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '0.000001',
  //   isFinished: false,
  // },
  {
    sousId: 2,
    stakingToken: sepoliaTokens.cake,
    earningToken: sepoliaTokens.usdt,
    contractAddress: '0xf3ac195Cc4414C627b146aEc4e234314d23773c6',
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.00001',
    isFinished: false,
  },
  // {
  //   sousId: 1,
  //   stakingToken: bscTestnetTokens.cake2,
  //   earningToken: bscTestnetTokens.mockA,
  //   contractAddress: '0xe7080E3afDfF2322080B5ba85700FE41287D864B',
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerSecond: '0.01',
  // },
  // {
  //   sousId: 2,
  //   stakingToken: bscTestnetTokens.mockA,
  //   earningToken: bscTestnetTokens.mockB,
  //   contractAddress: '0x31a069925fB770202b302C7911AF1ACBe0395420',
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerSecond: '0.01',
  // },
  // {
  //   sousId: 3,
  //   stakingToken: bscTestnetTokens.wbnb,
  //   earningToken: bscTestnetTokens.cake2,
  //   contractAddress: '0x550d3a43D5CB57E70dD1F53699CEaA0f371ADbBb',
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerSecond: '0.01',
  // },
  // {
  //   sousId: 5,
  //   stakingToken: bscTestnetTokens.msix,
  //   earningToken: bscTestnetTokens.cake2,
  //   contractAddress: '0xf45c9e61318006Dc31CA4993b8ab75E611fe0792',
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerSecond: '0.0001',
  // },
  // {
  //   sousId: 6,
  //   stakingToken: bscTestnetTokens.cake2,
  //   earningToken: bscTestnetTokens.msix,
  //   contractAddress: '0xeB019927EB2d79b6A03B728a6f7A9020f3e2E25f',
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerSecond: '1',
  // },
  // {
  //   sousId: 7,
  //   stakingToken: bscTestnetTokens.cake2,
  //   earningToken: bscTestnetTokens.msix,
  //   contractAddress: '0xd41F619f2f2E91F77054877Ed1a47661f290d19e',
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerSecond: '0.1',
  // },
].map((p) => ({
  ...p,
  contractAddress: getAddress(p.contractAddress, 11155111),
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize,
}))

// known finished pools
export const finishedPools: SerializedPool[] = []

export const pools: SerializedPool[] = [...livePools, ...finishedPools]
