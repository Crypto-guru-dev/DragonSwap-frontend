import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.MD]: {
    height: "28px",
    padding: "0 8px",
    fontSize: "14px",
  },
  [scales.SM]: {
    height: "24px",
    padding: "0 4px",
    fontSize: "12px",
  },
};

export const styleVariants: { [key: string]: { backgroundColor?: string; bg?: string } } = {
  [variants.PRIMARY]: {
    backgroundColor: "primary",
  },
  [variants.SECONDARY]: {
    backgroundColor: "secondaryBN",
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
  },
  [variants.TEXTDISABLED]: {
    backgroundColor: "textDisabled",
  },
  [variants.TEXTSUBTLE]: {
    backgroundColor: "textSubtle",
  },
  [variants.BINANCE]: {
    backgroundColor: "binance",
  },
  [variants.FAILURE]: {
    backgroundColor: "failure",
  },
  [variants.WARNING]: {
    backgroundColor: "warning",
  },
  [variants.WARNING]: {
    backgroundColor: "warning",
  },
  [variants.GRADIENTBOLD]: {
    bg: "gradientBold",
  },
};
