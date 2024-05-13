import { AutoRow, Button, ChevronDownIcon } from '@pancakeswap/uikit'
import { LightGreyCard } from 'components/Card'
import { Dispatch, ReactElement, SetStateAction } from 'react'

interface HideShowSelectorSectionPropsType {
  noHideButton?: boolean
  showOptions: boolean
  setShowOptions: Dispatch<SetStateAction<boolean>>
  heading: ReactElement
  content: ReactElement
}

export default function HideShowSelectorSection({
  noHideButton,
  showOptions,
  setShowOptions,
  heading,
  content,
}: HideShowSelectorSectionPropsType) {
  return (
    <LightGreyCard padding="8px" style={{ height: 'fit-content', borderRadius: "8px" }}>
      <AutoRow justifyContent="space-between" marginBottom={showOptions ? '8px' : '0px'}>
        {heading ?? <div />}
        {noHideButton || (
          <Button
            scale="sm"
            onClick={() => setShowOptions((prev) => !prev)}
            variant="text"
            endIcon={
              !showOptions && (
                <ChevronDownIcon
                  style={{
                    marginLeft: '0px',
                  }}
                  color="primary"
                />
              )
            }
          >
            {showOptions ? 'Less' : 'More'}
          </Button>
        )}
      </AutoRow>
      {showOptions && content}
    </LightGreyCard>
  )
}
