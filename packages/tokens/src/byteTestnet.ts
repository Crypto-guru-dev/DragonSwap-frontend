import { WETH9, ERC20Token } from '@pancakeswap/sdk'
import { ChainId } from '@pancakeswap/chains'
import { USDT, CAKE } from './common'

export const byteTestnetTokens = {
  weth: WETH9[ChainId.BYTE_TESTNET],
  usdt: USDT[ChainId.BYTE_TESTNET],
  cake: CAKE[ChainId.BYTE_TESTNET],
  // mockA: new ERC20Token(ChainId.BYTE_TESTNET, '0x15571d4a7D08e16108b97cf7c80Ffd5C3fcb9657', 18, 'A', 'Mock A'),
}
