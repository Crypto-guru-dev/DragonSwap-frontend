import { ReactElement } from 'react'
import { styled } from 'styled-components'
import { useTranslation } from '@pancakeswap/localization'
import { Box, Container, LinkExternal } from '@pancakeswap/uikit'
import { Address } from 'viem'

import IfoLayout, { IfoLayoutWrapper } from './IfoLayout'
import IfoPoolVaultCard from './IfoPoolVaultCard'
import IfoQuestions from './IfoQuestions'

const IfoStepBackground = styled(Box)`
  background: ${({ theme }) => theme.colors.gradientBubblegum};
`

interface TypeProps {
  ifoSection: ReactElement
  ifoSteps: ReactElement
  ifoBasicSaleType?: number
  ifoAddress?: Address
}

const IfoContainer: React.FC<React.PropsWithChildren<TypeProps>> = ({
  ifoSection,
  ifoSteps,
  ifoBasicSaleType,
  ifoAddress,
}) => {
  const { t } = useTranslation()

  return (
    <IfoLayout id="current-ifo" py={['24px', '24px', '40px']}>
      <Container>
        <IfoLayoutWrapper>
          <IfoPoolVaultCard ifoBasicSaleType={ifoBasicSaleType} ifoAddress={ifoAddress} />
          {ifoSection}
        </IfoLayoutWrapper>
      </Container>
      <IfoStepBackground>
        <Container>{ifoSteps}</Container>
      </IfoStepBackground>
      <Container>
        <IfoQuestions />
        <LinkExternal
          href="hhttps://ryuswap-help.gitbook.io/ryuswap-document"
          mx="auto"
          mt="16px"
        >
          {t('Apply to run an IFO!')}
        </LinkExternal>
      </Container>
    </IfoLayout>
  )
}

export default IfoContainer
