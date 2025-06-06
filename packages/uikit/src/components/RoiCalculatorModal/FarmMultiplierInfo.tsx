import { styled } from "styled-components";
import { useTranslation } from "@pancakeswap/localization";
import { Link } from "../Link";
import { Text } from "../Text";

const InlineText = styled(Text)`
  display: inline;
`;

const InlineLink = styled(Link)`
  display: inline-block;
  margin: 0 4px;
`;

interface FarmMultiplierInfoProps {
  farmCakePerSecond: string;
  totalMultipliers: string;
}

export const FarmMultiplierInfo: React.FC<React.PropsWithChildren<FarmMultiplierInfoProps>> = ({
  farmCakePerSecond,
  totalMultipliers,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <Text bold>
        {t("Farm’s DRX Per Second:")}
        <InlineText marginLeft={2}>{farmCakePerSecond}</InlineText>
      </Text>
      <Text bold>
        {t("Total Multipliers:")}
        <InlineText marginLeft={2}>{totalMultipliers}</InlineText>
      </Text>
      <Text my="24px">
        {t(
          "The Farm Multiplier represents the proportion of DRX rewards each farm receives as a proportion of its farm group."
        )}
      </Text>
      <Text my="24px">
        {t("For example, if a 1x farm received 1 DRX per block, a 40x farm would receive 40 DRX per block.")}
      </Text>
      <Text>
        {t("Different farm groups have different sets of multipliers.")}
        <InlineLink
          mt="8px"
          display="inline"
          href="https://ryuswap-help.gitbook.io/ryuswap-document"
          external
        >
          {t("Learn More")}
        </InlineLink>
      </Text>
    </>
  );
};
