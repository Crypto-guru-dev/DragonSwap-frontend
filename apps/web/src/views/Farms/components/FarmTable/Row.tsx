/* eslint-disable no-case-declarations */
import { useDelayedUnmount } from '@pancakeswap/hooks'
import { useTranslation } from '@pancakeswap/localization'
import { Flex, useMatchBreakpoints } from '@pancakeswap/uikit'
import { FarmWidget } from '@pancakeswap/widgets-internal'
import { createElement, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { styled } from 'styled-components'

import { V2Farm, V3Farm } from 'views/Farms/FarmsV3'
import { FarmV3ApyButton } from '../FarmCard/V3/FarmV3ApyButton'
import { useUserBoostedPoolsTokenId } from '../YieldBooster/hooks/bCakeV3/useBCakeV3Info'
import { useIsSomePositionBoosted } from '../YieldBooster/hooks/bCakeV3/useIsSomePositionBoosted'
import { ActionPanelV2, ActionPanelV3 } from './Actions/ActionPanel'
import Apr, { AprProps } from './Apr'
import { FarmCell } from './Farm'

const { FarmAuctionTag, BoostedTag, StableFarmTag, V2Tag, V3FeeTag } = FarmWidget.Tags
const { CellLayout, Details, Multiplier, Liquidity, Earned, LpAmount, StakedLiquidity } = FarmWidget.FarmTable
const { DesktopColumnSchema, MobileColumnSchema, V3DesktopColumnSchema } = FarmWidget

export type RowProps = {
  earned: FarmWidget.FarmTableEarnedProps
  initialActivity?: boolean
  multiplier: FarmWidget.FarmTableMultiplierProps
} & (V2RowProps | V3RowProps | CommunityRowProps)

export type V2RowProps = {
  type: 'v2'
  farm: FarmWidget.FarmTableFarmTokenInfoProps & { version: 2 }
  liquidity: FarmWidget.FarmTableLiquidityProps
  apr: AprProps
  details: V2Farm
}

export type CommunityRowProps = Omit<V2RowProps, 'type'> & {
  type: 'community'
}

export type V3RowProps = {
  type: 'v3'
  apr: {
    value: string
    pid: number
  }
  stakedLiquidity: FarmWidget.FarmTableLiquidityProps
  farm: FarmWidget.FarmTableFarmTokenInfoProps & { version: 3 }
  details: V3Farm
  availableLp: {
    pid: number
    amount: number
  }
  stakedLp: {
    pid: number
    amount: number
  }
}

type RowPropsWithLoading = {
  userDataReady: boolean
  isLastFarm: boolean
} & RowProps

const cells = {
  apr: Apr,
  farm: FarmCell,
  earned: Earned,
  details: Details,
  multiplier: Multiplier,
  liquidity: Liquidity,
  stakedLiquidity: StakedLiquidity,
  availableLp: LpAmount,
  stakedLp: LpAmount,
}

const CellInner = styled.div`
  padding: 24px 0px;
  display: flex;
  width: 100%;
  align-items: center;
  padding-right: 8px;

  ${({ theme }) => theme.mediaQueries.xl} {
    padding-right: 32px;
  }
`

const StyledTr = styled.tr`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.input};

  :first-child {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }

  :last-child {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }

  &:not(:last-child) {
    
  }
`

const EarnedMobileCell = styled.td`
  padding: 16px 0 24px 16px;
`

const AprMobileCell = styled.td`
  padding-top: 16px;
  padding-bottom: 24px;
`

const FarmMobileCell = styled.td`
  padding-top: 24px;
`

const Row: React.FunctionComponent<React.PropsWithChildren<RowPropsWithLoading>> = (props) => {
  const { initialActivity, userDataReady, farm, multiplier } = props
  const hasSetInitialValue = useRef(false)
  const hasStakedAmount = farm.isStaking || false
  const [actionPanelExpanded, setActionPanelExpanded] = useState(hasStakedAmount)
  const shouldRenderChild = useDelayedUnmount(actionPanelExpanded, 300)
  const { t } = useTranslation()

  // const { tokenIds } = useUserBoostedPoolsTokenId()
  // const { isBoosted } = useIsSomePositionBoosted(props.type === 'v3' ? props?.details?.stakedPositions : [], tokenIds)

  const toggleActionPanel = useCallback(() => {
    setActionPanelExpanded(!actionPanelExpanded)
  }, [actionPanelExpanded])

  useEffect(() => {
    setActionPanelExpanded(hasStakedAmount)
  }, [hasStakedAmount])
  useEffect(() => {
    if (initialActivity && hasSetInitialValue.current === false) {
      setActionPanelExpanded(initialActivity)
      hasSetInitialValue.current = true
    }
  }, [initialActivity])

  const { isDesktop, isMobile } = useMatchBreakpoints()

  const isSmallerScreen = !isDesktop

  const tableSchema = useMemo(() => {
    return isSmallerScreen ? MobileColumnSchema : props.type === 'v3' ? V3DesktopColumnSchema : DesktopColumnSchema
  }, [isSmallerScreen, props.type])
  const columnNames = useMemo(() => tableSchema.map((column) => column.name), [tableSchema])

  return (
    <>
      {!isMobile ? (
        <StyledTr onClick={toggleActionPanel}>
          {Object.keys(props).map((key) => {
            const columnIndex = columnNames.indexOf(key)
            if (columnIndex === -1) {
              return null
            }

            switch (key) {
              case 'type':
                return (
                  <td key={key}>
                    <CellInner style={{ minWidth: '140px', gap: '4px' }}>
                      {(props[key] === 'community' || props?.farm?.isCommunity) && <FarmAuctionTag scale="sm" />}
                      {props.type === 'v2' ? (
                        props?.details?.isStable ? (
                          <StableFarmTag scale="sm" />
                        ) : (
                          <V2Tag scale="sm" />
                        )
                      ) : null}
                      {props.type === 'v3' && <V3FeeTag feeAmount={props.details.feeAmount} scale="sm" />}
                      {/* {isBoosted ? <BoostedTag scale="sm" /> : null} */}
                    </CellInner>
                  </td>
                )
              case 'details':
                return (
                  <td key={key} colSpan={props.type === 'v3' ? 1 : 3}>
                    <CellInner
                      style={{
                        justifyContent: props.type !== 'v3' ? 'flex-end' : 'center',
                      }}
                    >
                      <CellLayout>
                        <Details actionPanelToggled={actionPanelExpanded} />
                      </CellLayout>
                    </CellInner>
                  </td>
                )
              case 'apr':
                if (props.type === 'v3') {
                  return (
                    <td key={key}>
                      <CellInner>
                        <CellLayout label={t('APR')}>
                          <FarmV3ApyButton farm={props.details} />
                        </CellLayout>
                      </CellInner>
                    </td>
                  )
                }

                return (
                  <td key={key}>
                    <CellInner>
                      <CellLayout label={t('APR')}>
                        <Apr
                          {...props.apr}
                          hideButton={isSmallerScreen}
                          strikethrough={false}
                          boosted={false}
                          farmCakePerSecond={multiplier.farmCakePerSecond}
                          totalMultipliers={multiplier.totalMultipliers}
                        />
                        {/* {props?.details?.boosted && userDataReady ? (
                          <BoostedApr
                            lpRewardsApr={props?.apr?.lpRewardsApr}
                            apr={props?.apr?.originalValue}
                            pid={props.farm?.pid}
                            lpTotalSupply={props.details?.lpTotalSupply}
                            userBalanceInFarm={
                              stakedBalance.plus(tokenBalance).gt(0)
                                ? stakedBalance.plus(tokenBalance)
                                : proxy.stakedBalance.plus(proxy.tokenBalance)
                            }
                          />
                        ) : null} */}
                      </CellLayout>
                    </CellInner>
                  </td>
                )
              default:
                if (cells[key]) {
                  return (
                    <td key={key}>
                      <CellInner>
                        <CellLayout label={t(tableSchema[columnIndex].label)}>
                          {createElement(cells[key], { ...props[key], userDataReady })}
                        </CellLayout>
                      </CellInner>
                    </td>
                  )
                }
                return null
            }
          })}
        </StyledTr>
      ) : (
        <>
          <tr style={{ cursor: 'pointer' }} onClick={toggleActionPanel}>
            <FarmMobileCell colSpan={3}>
              <Flex justifyContent="space-between" alignItems="center">
                <FarmCell {...props.farm} />
                <Flex
                  mr="16px"
                  alignItems={isMobile ? 'end' : 'center'}
                  flexDirection={isMobile ? 'column' : 'row'}
                  style={{ gap: '4px' }}
                >
                  {props.type === 'v2' ? (
                    props?.details?.isStable ? (
                      <StableFarmTag scale="sm" />
                    ) : (
                      <V2Tag scale="sm" />
                    )
                  ) : null}
                  {props.type === 'v3' && <V3FeeTag feeAmount={props.details.feeAmount} scale="sm" />}
                  {props.type === 'community' || props?.farm?.isCommunity ? <FarmAuctionTag scale="sm" /> : null}
                  {/* {isBoosted ? <BoostedTag style={{ background: 'none', verticalAlign: 'bottom' }} scale="sm" /> : null} */}
                </Flex>
              </Flex>
            </FarmMobileCell>
          </tr>
          <StyledTr onClick={toggleActionPanel}>
            <td width="33%">
              <EarnedMobileCell>
                <CellLayout label={t('Earned')}>
                  <Earned {...props.earned} userDataReady={userDataReady} />
                </CellLayout>
              </EarnedMobileCell>
            </td>
            <td width="33%">
              <AprMobileCell>
                <CellLayout label={t('APR')}>
                  {props.type === 'v3' ? (
                    <FarmV3ApyButton farm={props.details} />
                  ) : (
                    <>
                      <Apr
                        {...props.apr}
                        hideButton
                        strikethrough={false}
                        boosted={false}
                        farmCakePerSecond={multiplier.farmCakePerSecond}
                        totalMultipliers={multiplier.totalMultipliers}
                      />
                    </>
                  )}
                </CellLayout>
              </AprMobileCell>
            </td>
            <td width="33%">
              <CellInner style={{ justifyContent: 'flex-end' }}>
                <Details actionPanelToggled={actionPanelExpanded} />
              </CellInner>
            </td>
          </StyledTr>
        </>
      )}
      {shouldRenderChild && (
        <StyledTr>
          <td colSpan={9}>
            {props.type === 'v3' ? (
              <ActionPanelV3
                {...props}
                expanded={actionPanelExpanded}
                alignLinksToRight={isMobile}
                isLastFarm={props.isLastFarm}
              />
            ) : (
              <ActionPanelV2
                {...props}
                expanded={actionPanelExpanded}
                alignLinksToRight={isMobile}
                isLastFarm={props.isLastFarm}
              />
            )}
          </td>
        </StyledTr>
      )}
    </>
  )
}

export default Row
