import { ChainId } from '@pancakeswap/chains'
import FixedStaking from 'views/FixedStaking'

const FixedStakingPage = () => {
  return <FixedStaking />
}

FixedStakingPage.chains = [ChainId.BYTE_TESTNET]

export default FixedStakingPage
