import { styled } from "styled-components";
import { StyledMenuItemProps } from "./types";

export const StyledMenuItemContainer = styled.div<StyledMenuItemProps>`
  position: relative;
`;

const StyledMenuItem = styled.a<StyledMenuItemProps>`
  position: relative;
  display: flex;
  align-items: center;

  background-color: ${({ $statusColor, theme, $isActive }) => ($isActive ? theme.colors.primary : "transparent")};
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.secondary : theme.colors.textSubtle)};
  border-radius: ${({ $isActive }) => ($isActive ? "0.5rem" : "none")};
  font-size: 14px;
  font-weight: ${({ $isActive }) => ($isActive ? "600" : "400")};
  line-height: 18px;
  letter-spacing: 0em;
  opacity: ${({ $isDisabled }) => ($isDisabled ? 0.5 : 1)};
  pointer-events: ${({ $isDisabled }) => ($isDisabled ? "none" : "inherit")};

  ${({ $statusColor, theme }) =>
    $statusColor &&
    `
    &:after {
      content: "";
      border-radius: 100%;
      background: ${theme.colors[$statusColor]};
      height: 8px;
      width: 8px;
      margin-left: 12px;
    }
  `}

  ${({ $variant }) =>
    $variant === "default"
      ? `
    padding: 0 16px;
    height: 48px;
  `
      : `
    padding: 10px 16px;
    height: 42px;
  `}

  &:hover {
    background: ${({ theme }) => theme.colors.tertiary};
    border-radius: 8px;
  }
`;

export default StyledMenuItem;
