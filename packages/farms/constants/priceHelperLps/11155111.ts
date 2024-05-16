import { sepoliaTokens } from '@pancakeswap/tokens'
import { getAddress } from 'viem'
import { SerializedFarmConfig } from '../..'

const priceHelperLps: SerializedFarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'DRX-USDT LP',
    lpAddress: '0x40b89CA164CCefC498c8466cB0B49A614c8e7ED8',
    quoteToken: sepoliaTokens.usdt,
    token: sepoliaTokens.cake,
  },
  {
    pid: 2,
    lpSymbol: 'ETH-USDT LP',
    lpAddress: '0x50Ebff20a6DDe8314CBe2dba76c5CDeB0eb6089E',
    quoteToken: sepoliaTokens.usdt,
    token: sepoliaTokens.weth,
  },
].map((p) => ({
  ...p,
  token: p.token.serialize,
  quoteToken: p.quoteToken.serialize,
  lpAddress: getAddress(p.lpAddress),
}))

export default priceHelperLps
