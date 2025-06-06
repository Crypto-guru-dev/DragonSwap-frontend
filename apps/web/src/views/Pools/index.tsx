import { styled } from 'styled-components'

import { checkIsBoostedPool } from '@pancakeswap/pools'
import { Flex, FlexLayout, Heading, Image, Link, Loading, PageHeader, Text, ViewMode } from '@pancakeswap/uikit'
import { Pool } from '@pancakeswap/widgets-internal'
import { useAccount } from 'wagmi'

import { ChainId } from '@pancakeswap/chains'
import { useTranslation } from '@pancakeswap/localization'
import { Token } from '@pancakeswap/sdk'
import ConnectWalletButton from 'components/ConnectWalletButton'
import Page from 'components/Layout/Page'
import { V3SubgraphHealthIndicator } from 'components/SubgraphHealthIndicator'
import { TokenPairImage } from 'components/TokenImage'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { usePoolsPageFetch, usePoolsWithVault } from 'state/pools/hooks'

import CakeVaultCard from './components/CakeVaultCard'
import AprRow from './components/PoolCard/AprRow'
import CardActions from './components/PoolCard/CardActions'
import CardFooter from './components/PoolCard/CardFooter'
import PoolControls from './components/PoolControls'
import PoolRow, { VaultPoolRow } from './components/PoolsTable/PoolRow'

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const Subcontainer = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.sm} {
    width: 70%;
  }
  background-color: ${({ theme }) => theme.colors.backgroundAlt};
  border-radius: 16px;
`

const CardLayout = styled(FlexLayout)`
  justify-content: center;
`

const FinishedTextContainer = styled(Flex)`
  padding-bottom: 32px;
  flex-direction: column;
  ${({ theme }) => theme.mediaQueries.md} {
    flex-direction: row;
  }
`

const FinishedTextLink = styled(Link)`
  font-weight: 400;
  white-space: nowrap;
  text-decoration: underline;
`

const Pools: React.FC<React.PropsWithChildren> = () => {
  const { t } = useTranslation()
  const { address: account } = useAccount()
  const { chainId } = useActiveChainId()
  const { pools, userDataLoaded } = usePoolsWithVault()


  usePoolsPageFetch()

  return (
    <Container>
      <Subcontainer>
      {/* <VCakeModal /> */}
      <PageHeader>
        <Flex justifyContent="space-between" flexDirection={['column', null, null, 'row']}>
          <Flex flex="1" flexDirection="column" mr={['8px', 0]}>
            <Heading as="h1" scale="lg" color="secondary" mb="24px">
              {t('Pools')}
            </Heading>
            <Heading scale="sm" color="text">
              {t('Earn Yield On Trading Fees By Providing Liquidity')}
            </Heading>
          </Flex>
        </Flex>
      </PageHeader>
      <Page>
        <PoolControls pools={pools}>
          {({ chosenPools, viewMode, stakedOnly, normalizedUrlSearch, showFinishedPools }) => (
            <>
              {/* {showFinishedPools && chainId === ChainId.BSC && (
                <FinishedTextContainer>
                  <Text fontSize={['16px', null, '20px']} color="failure" pr="4px">
                    {t('Looking for v1 CAKE syrup pools?')}
                  </Text>
                  <FinishedTextLink
                    href="https://v1-farms.pancakeswap.finance/pools/history"
                    fontSize={['16px', null, '20px']}
                    color="failure"
                  >
                    {t('Go to migration page')}.
                  </FinishedTextLink>
                </FinishedTextContainer>
              )} */}
              {account && !userDataLoaded && stakedOnly && (
                <Flex justifyContent="center" mb="4px">
                  <Loading />
                </Flex>
              )}
              {viewMode === ViewMode.CARD ? (
                <CardLayout>
                  {chosenPools.map((pool) =>
                    pool.vaultKey ? (
                      <CakeVaultCard key={pool.vaultKey} pool={pool} showStakedOnly={stakedOnly} />
                    ) : (
                      <Pool.PoolCard<Token>
                        key={pool.sousId}
                        pool={pool}
                        isBoostedPool={Boolean(chainId && checkIsBoostedPool(pool.contractAddress, chainId))}
                        isStaked={Boolean(pool?.userData?.stakedBalance?.gt(0))}
                        cardContent={
                          account ? (
                            <CardActions pool={pool} stakedBalance={pool?.userData?.stakedBalance} />
                          ) : (
                            <>
                              <Text mb="10px" textTransform="uppercase" fontSize="12px" color="textSubtle" bold>
                                {t('Start earning')}
                              </Text>
                              <ConnectWalletButton />
                            </>
                          )
                        }
                        tokenPairImage={
                          <TokenPairImage
                            primaryToken={pool.earningToken}
                            secondaryToken={pool.stakingToken}
                            width={64}
                            height={64}
                          />
                        }
                        cardFooter={<CardFooter pool={pool} account={account ?? ''} />}
                        aprRow={<AprRow pool={pool} stakedBalance={pool?.userData?.stakedBalance} />}
                      />
                    ),
                  )}
                </CardLayout>
              ) : (
                <Pool.PoolsTable>
                  {chosenPools.map((pool) =>
                    pool.vaultKey ? (
                      <VaultPoolRow
                        initialActivity={normalizedUrlSearch.toLowerCase() === pool.earningToken.symbol?.toLowerCase()}
                        key={pool.vaultKey}
                        vaultKey={pool.vaultKey}
                        account={account ?? ''}
                      />
                    ) : (
                      <PoolRow
                        initialActivity={normalizedUrlSearch.toLowerCase() === pool.earningToken.symbol?.toLowerCase()}
                        key={pool.sousId}
                        sousId={pool.sousId}
                        account={account ?? ''}
                      />
                    ),
                  )}
                </Pool.PoolsTable>
              )}
              {/* <Image
                mx="auto"
                mt="12px"
                src="/images/decorations/3d-syrup-bunnies.png"
                alt="Pancake illustration"
                width={192}
                height={184.5}
              /> */}
            </>
          )}
        </PoolControls>
        <V3SubgraphHealthIndicator />
      </Page>
      </Subcontainer>
    </Container>
  )
}

export default Pools
