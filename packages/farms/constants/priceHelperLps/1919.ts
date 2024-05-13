import { byteTestnetTokens } from '@pancakeswap/tokens'
import { getAddress } from 'viem'
import { SerializedFarmConfig } from '../..'

const priceHelperLps: SerializedFarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'JIM-USDT LP',
    lpAddress: '0x1A250E13D07695Fc92aB68aa1fAB2BA86D516Ae1',
    quoteToken: byteTestnetTokens.usdt,
    token: byteTestnetTokens.cake,
  },
  {
    pid: 2,
    lpSymbol: 'BEXC-USDT LP',
    lpAddress: '0xDea03d402F36e5cEca332ACdcD34a7d4793549B6',
    quoteToken: byteTestnetTokens.usdt,
    token: byteTestnetTokens.weth,
  },
].map((p) => ({
  ...p,
  token: p.token.serialize,
  quoteToken: p.quoteToken.serialize,
  lpAddress: getAddress(p.lpAddress),
}))

export default priceHelperLps
