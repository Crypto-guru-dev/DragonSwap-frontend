import { Text, AtomBox, SwapCSS } from "@pancakeswap/uikit";

import { NumericalInput, NumericalInputProps } from "./NumericalInput";

interface CurrencyInputPanelProps extends Omit<NumericalInputProps, "onBlur"> {
  onInputBlur?: () => void;
  id: string;
  top?: React.ReactNode;
  bottom?: React.ReactNode;
  showBridgeWarning?: boolean;
}
export function CurrencyInputPanel({
  value,
  onUserInput,
  onInputBlur,
  top,
  bottom,
  id,
  disabled,
  error,
  loading,
  showBridgeWarning,
}: CurrencyInputPanelProps) {
  return (
    <AtomBox position="relative" id={id} display="grid" gap="4px" >
      <AtomBox
        display="flex"
        flexDirection="column"
        flexWrap="nowrap"
        position="relative"
        backgroundColor="input"
        borderRadius="default"
        zIndex="1"
      >
        <AtomBox display="flex" alignItems="center" justifyContent="space-between" padding="24px" >
          {top}
        </AtomBox>
        <AtomBox
          as="label"
          className={SwapCSS.inputContainerVariants({
            showBridgeWarning: !!showBridgeWarning,
            error: Boolean(error),
          })}
          style={{ boxShadow: "none" }}
        >
          
          {bottom}
          <AtomBox
            display="flex"
            flexDirection="row"
            flexWrap="nowrap"
            color="text"
            fontSize="12px"
            lineHeight="16px"
            px="16px"
            pb="24px"
          >
            <NumericalInput
              error={Boolean(error)}
              disabled={disabled}
              loading={loading}
              className="token-amount-input"
              value={value}
              onBlur={onInputBlur}
              onUserInput={(val) => {
                onUserInput(val);
              }}
            />
          </AtomBox>
          
        </AtomBox>

        {error ? (
          <Text pb="8px" fontSize="12px" color="red">
            {error}
          </Text>
        ) : null}

        {disabled && (
          <AtomBox role="presentation" position="absolute" inset="0px" backgroundColor="backgroundAlt" opacity="0.6" />
        )}
      </AtomBox>
    </AtomBox>
  );
}
