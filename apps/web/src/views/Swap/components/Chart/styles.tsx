import { Box } from '@pancakeswap/uikit'
import { styled } from 'styled-components'

export const StyledPriceChart = styled(Box)<{
  $isDark: boolean
  $isExpanded: boolean
  $isFullWidthContainer?: boolean
}>`
  border: none;
  border-radius: 32px;
  width: 100%;
  padding-top: 36px;
  ${({ theme }) => theme.mediaQueries.sm} {
    padding-top: 8px;
    background: ${({ $isDark }) => ($isDark ? '#1A243E' : 'rgba(255, 255, 255, 0.5)')};
    border: ${({ theme }) => `1px solid ${theme.colors.cardBorder}`};
    border-radius: ${({ $isExpanded }) => ($isExpanded ? '16px' : '16px')};
    width: ${({ $isExpanded, $isFullWidthContainer }) => ($isFullWidthContainer || $isExpanded ? '100%' : '50%')};
    height: ${({ $isExpanded }) => ($isExpanded ? '100%' : '516px')};
  }
`

StyledPriceChart.defaultProps = {
  height: '70%',
}
