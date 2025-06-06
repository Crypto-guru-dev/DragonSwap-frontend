import { scales, variants } from "./types";
import { vars } from "../../css/vars.css";

export const scaleVariants = {
  [scales.MD]: {
    height: "48px",
    padding: "0 24px",
  },
  [scales.SM]: {
    height: "32px",
    padding: "0 16px",
  },
  [scales.XS]: {
    height: "20px",
    fontSize: "12px",
    padding: "0 8px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: "primary",
    color: "white",
  },
  [variants.WHITE]: {
    backgroundColor: "primary",
    color: "white",
    borderRadius: "50px"
  },
  [variants.WHITETITLE]: {
    backgroundColor: "transparent",
    color: "white",
    boxShadow: "none",
  },
  [variants.ONLYWALLET]: {
    backgroundColor: "transparent",
    color: "white",
    boxShadow: "none",
    border: "1.5px solid #1D51FE",
    borderRadius: "50px",
  },
  [variants.SECONDARY]: {
    backgroundColor: "#3A4560", 
    color: "white",
    ":disabled": {
      backgroundColor: "transparent",
    },
  },
  [variants.TERTIARY]: {
    backgroundColor: "tertiary",
    boxShadow: "none",
    color: "primary",
  },
  [variants.SUBTLE]: {
    backgroundColor: "textSubtle",
    color: "backgroundAlt",
  },
  [variants.DANGER]: {
    backgroundColor: "failure",
    color: "white",
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "primary",
    boxShadow: "none",
  },
  [variants.LIGHT]: {
    backgroundColor: "input",
    color: "textSubtle",
    boxShadow: "none",
  },
  [variants.BUBBLEGUM]: {
    background: vars.colors.gradientBubblegum,
    color: "textSubtle",
    boxShadow: "none",
    ":disabled": {
      background: vars.colors.disabled,
    },
  },
};
