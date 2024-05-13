import { Flex, IconButton, CogIcon, useModal } from '@pancakeswap/uikit'

import SettingsModal from './SettingsModal'

type Props = {
  color?: string
  mr?: string
  pt?:string
  mode?: string
}

const GlobalSettings = ({ color, mr = '8px', pt, mode }: Props) => {
  const [onPresentSettingsModal] = useModal(<SettingsModal mode={mode} />)

  return (
    <Flex>
      <IconButton
        onClick={onPresentSettingsModal}
        variant="text"
        scale="sm"
        mr={mr}
        id={`open-settings-dialog-button-${mode}`}
      >
        <CogIcon height={23} width={23} pt={pt} color={color || 'textSubtle'} />
      </IconButton>
    </Flex>
  )
}

export default GlobalSettings
