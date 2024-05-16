import { WETH9, ERC20Token } from '@pancakeswap/sdk'
import { ChainId } from '@pancakeswap/chains'
import { USDT, CAKE } from './common'

export const byteTestnetTokens = {
  weth: WETH9[ChainId.SEPOLIA],
  usdt: USDT[ChainId.SEPOLIA],
  cake: CAKE[ChainId.SEPOLIA],
  // mockA: new ERC20Token(ChainId.SEPOLIA, '0x15571d4a7D08e16108b97cf7c80Ffd5C3fcb9657', 18, 'A', 'Mock A'),
}
