import { styled } from "styled-components";
import { ChevronDownIcon } from "@pancakeswap/uikit";

export interface DetailsProps {
  actionPanelToggled: boolean;
}

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding-right: 8px;
  color: ${({ theme }) => theme.colors.primary};

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-right: 0px;
  }
`;

const ArrowIcon = styled(ChevronDownIcon)<{ $toggled?: boolean }>`
  transform: ${({ $toggled }) => ($toggled ? "rotate(180deg)" : "rotate(0)")};
  height: 20px;
`;

const Details: React.FC<React.PropsWithChildren<DetailsProps>> = ({ actionPanelToggled }) => {
  return (
    <Container>
      <ArrowIcon color="white" $toggled={actionPanelToggled} />
    </Container>
  );
};

export default Details;
