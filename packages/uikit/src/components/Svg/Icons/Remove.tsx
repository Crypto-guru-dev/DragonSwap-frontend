import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg width="41" height="40" viewBox="0 0 41 40" fill="none" {...props}>
      <path d="M26.5 20C26.5 20.1326 26.4473 20.2598 26.3536 20.3536C26.2598 20.4473 26.1326 20.5 26 20.5H15C14.8674 20.5 14.7402 20.4473 14.6464 20.3536C14.5527 20.2598 14.5 20.1326 14.5 20C14.5 19.8674 14.5527 19.7402 14.6464 19.6464C14.7402 19.5527 14.8674 19.5 15 19.5H26C26.1326 19.5 26.2598 19.5527 26.3536 19.6464C26.4473 19.7402 26.5 19.8674 26.5 20Z" fill="white"/>
    </Svg>
  );
};

export default Icon;
