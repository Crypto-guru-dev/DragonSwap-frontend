import { ReactNode } from "react";
import { useTranslation } from "@pancakeswap/localization";
import { Text, IconButton, MinusIcon, AddIcon } from "@pancakeswap/uikit";
import { StyledActionContainer, ActionContent, ActionTitles, IconButtonWrapper } from "./styles";

export interface StakedActionComponentProps {
  lpSymbol: string;
  children?: ReactNode;
  disabledMinusButton?: boolean;
  disabledPlusButton?: boolean;
  onPresentWithdraw: () => void;
  onPresentDeposit: () => void;
}

const StakedActionComponent: React.FunctionComponent<React.PropsWithChildren<StakedActionComponentProps>> = ({
  lpSymbol,
  children,
  disabledMinusButton,
  disabledPlusButton,
  onPresentWithdraw,
  onPresentDeposit,
}) => {
  const { t } = useTranslation();

  return (
    <StyledActionContainer>
      <ActionTitles>
        <Text bold color="secondary" fontSize="12px" pr="4px">
          {lpSymbol}
        </Text>
        <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px">
          {t("Staked")}
        </Text>
      </ActionTitles>
      <ActionContent>
        {children}
        <IconButtonWrapper>
          <IconButton mr="6px" variant="primary" disabled={disabledMinusButton} onClick={onPresentWithdraw}>
            <MinusIcon color="white" width="14px" />
          </IconButton>
          <IconButton variant="primary" disabled={disabledPlusButton} onClick={onPresentDeposit}>
            <AddIcon color="white" width="14px" />
          </IconButton>
        </IconButtonWrapper>
      </ActionContent>
    </StyledActionContainer>
  );
};

export default StakedActionComponent;
