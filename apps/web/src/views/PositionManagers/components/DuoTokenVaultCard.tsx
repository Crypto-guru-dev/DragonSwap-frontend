import { MANAGER, Strategy } from '@pancakeswap/position-managers'
import { Currency, CurrencyAmount, Percent, Price } from '@pancakeswap/sdk'
import { Card, CardBody } from '@pancakeswap/uikit'
import { FeeAmount } from '@pancakeswap/v3-sdk'
import { PropsWithChildren, ReactNode, memo, useMemo } from 'react'
import { styled } from 'styled-components'
import { Address } from 'viem'
import { useApr } from 'views/PositionManagers/hooks/useApr'
import { AprDataInfo } from '../hooks'
import { getVaultName } from '../utils'
import { CardTitle } from './CardTitle'
import { ExpandableSection } from './ExpandableSection'
import { LiquidityManagement } from './LiquidityManagement'
import { ManagerInfo } from './ManagerInfo'
import { VaultInfo } from './VaultInfo'
import { VaultLinks } from './VaultLinks'
import { YieldInfo } from './YieldInfo'

const StyledCard = styled(Card)`
  align-self: baseline;
  max-width: 100%;
  margin: 0 0 24px 0;
  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: 350px;
    margin: 0 12px 46px;
  }
`

interface Props {
  currencyA: Currency
  currencyB: Currency
  earningToken: Currency
  name: string
  id: string | number
  idByManager: string | number
  feeTier: FeeAmount
  ratio: number
  strategy: Strategy
  manager: {
    id: MANAGER
    name: string
  }
  managerFee?: Percent
  autoFarm?: boolean
  autoCompound?: boolean
  info?: ReactNode
  isSingleDepositToken: boolean
  allowDepositToken0?: boolean
  allowDepositToken1?: boolean
  contractAddress: Address
  poolToken0Amount?: bigint
  poolToken1Amount?: bigint
  stakedToken0Amount?: bigint
  stakedToken1Amount?: bigint
  token0PriceUSD?: number
  token1PriceUSD?: number
  pendingReward: bigint | undefined
  userVaultPercentage?: Percent
  managerAddress: Address
  managerInfoUrl: string
  strategyInfoUrl: string
  projectVaultUrl?: string
  learnMoreAboutUrl?: string
  rewardPerSecond: string
  aprDataInfo: {
    info: AprDataInfo | undefined
    isLoading: boolean
    timeWindow: number
  }
  rewardEndTime: number
  rewardStartTime: number
  refetch?: () => void
  totalAssetsInUsd: number
  totalStakedInUsd: number
  userLpAmounts?: bigint
  totalSupplyAmounts?: bigint
  precision?: bigint
  lpTokenDecimals?: number
  aprTimeWindow?: number
}

export const DuoTokenVaultCard = memo(function DuoTokenVaultCard({
  currencyA,
  currencyB,
  earningToken,
  name,
  id,
  idByManager,
  feeTier,
  autoFarm,
  autoCompound,
  manager,
  managerFee,
  strategy,
  ratio,
  isSingleDepositToken,
  allowDepositToken0 = true,
  allowDepositToken1 = true,
  contractAddress,
  stakedToken0Amount,
  stakedToken1Amount,
  poolToken0Amount,
  poolToken1Amount,
  token0PriceUSD,
  token1PriceUSD,
  pendingReward,
  managerInfoUrl,
  strategyInfoUrl,
  projectVaultUrl,
  rewardPerSecond,
  aprDataInfo,
  rewardEndTime,
  refetch,
  rewardStartTime,
  totalAssetsInUsd,
  userLpAmounts,
  totalSupplyAmounts,
  precision,
  managerAddress,
  totalStakedInUsd,
  learnMoreAboutUrl,
  lpTokenDecimals,
}: PropsWithChildren<Props>) {
  const apr = useApr({
    currencyA,
    currencyB,
    poolToken0Amount,
    poolToken1Amount,
    token0PriceUSD,
    token1PriceUSD,
    rewardPerSecond,
    earningToken,
    avgToken0Amount: aprDataInfo?.info?.token0 ?? 0,
    avgToken1Amount: aprDataInfo?.info?.token1 ?? 0,
    rewardEndTime,
    rewardStartTime,
  })

  const price = new Price(currencyA, currencyB, 100000n, 100000n)
  const vaultName = useMemo(() => getVaultName(idByManager, name), [name, idByManager])
  const staked0Amount = stakedToken0Amount ? CurrencyAmount.fromRawAmount(currencyA, stakedToken0Amount) : undefined
  const staked1Amount = stakedToken1Amount ? CurrencyAmount.fromRawAmount(currencyB, stakedToken1Amount) : undefined

  const withCakeReward: boolean = useMemo(() => earningToken.symbol === 'DRX', [earningToken])

  return (
    <StyledCard>
      <CardTitle
        currencyA={currencyA}
        currencyB={currencyB}
        vaultName={vaultName}
        feeTier={feeTier}
        autoFarm={autoFarm}
        autoCompound={autoCompound}
        isSingleDepositToken={isSingleDepositToken}
        allowDepositToken1={allowDepositToken1}
      />
      <CardBody>
        <YieldInfo
          id={id}
          apr={apr}
          isAprLoading={aprDataInfo.isLoading}
          autoCompound={autoCompound}
          withCakeReward={withCakeReward}
          totalAssetsInUsd={totalAssetsInUsd}
          totalStakedInUsd={totalStakedInUsd}
          lpSymbol={`${currencyA.symbol}-${currencyB.symbol} LP`}
          totalSupplyAmounts={totalSupplyAmounts}
          userLpAmounts={userLpAmounts}
          precision={precision}
          lpTokenDecimals={lpTokenDecimals}
          aprTimeWindow={aprDataInfo.timeWindow}
        />
        <ManagerInfo mt="1.5em" id={manager.id} name={manager.name} strategy={strategy} />
        <LiquidityManagement
          manager={manager}
          currencyA={currencyA}
          currencyB={currencyB}
          id={id}
          totalAssetsInUsd={totalAssetsInUsd}
          earningToken={earningToken}
          price={price}
          vaultName={vaultName}
          feeTier={feeTier}
          ratio={ratio}
          isSingleDepositToken={isSingleDepositToken}
          allowDepositToken0={allowDepositToken0}
          allowDepositToken1={allowDepositToken1}
          contractAddress={contractAddress}
          staked0Amount={staked0Amount}
          staked1Amount={staked1Amount}
          token0PriceUSD={token0PriceUSD}
          token1PriceUSD={token1PriceUSD}
          pendingReward={pendingReward}
          poolToken0Amount={poolToken0Amount}
          poolToken1Amount={poolToken1Amount}
          rewardPerSecond={rewardPerSecond}
          aprDataInfo={aprDataInfo}
          rewardEndTime={rewardEndTime}
          refetch={refetch}
          rewardStartTime={rewardStartTime}
          totalSupplyAmounts={totalSupplyAmounts}
          userLpAmounts={userLpAmounts}
          precision={precision}
          isInCakeRewardDateRange={apr.isInCakeRewardDateRange}
          totalStakedInUsd={totalStakedInUsd}
          strategyInfoUrl={strategyInfoUrl}
          learnMoreAboutUrl={learnMoreAboutUrl}
          lpTokenDecimals={lpTokenDecimals}
          aprTimeWindow={aprDataInfo.timeWindow}
        />
        <ExpandableSection mt="1.5em">
          <VaultInfo
            currencyA={currencyA}
            currencyB={currencyB}
            managerFee={managerFee}
            token0PriceUSD={token0PriceUSD}
            token1PriceUSD={token1PriceUSD}
            poolToken0Amount={poolToken0Amount}
            poolToken1Amount={poolToken1Amount}
            allowDepositToken0={allowDepositToken0}
            allowDepositToken1={allowDepositToken1}
            isSingleDepositToken={isSingleDepositToken}
            rewardPerSecond={rewardPerSecond}
            earningToken={earningToken}
            isInCakeRewardDateRange={apr.isInCakeRewardDateRange}
          />
          <VaultLinks
            mt="0.5em"
            manager={manager}
            vaultAddress={contractAddress}
            managerAddress={managerAddress}
            managerInfoUrl={managerInfoUrl}
            strategyInfoUrl={strategyInfoUrl}
            projectVaultUrl={projectVaultUrl}
          />
        </ExpandableSection>
      </CardBody>
    </StyledCard>
  )
})
