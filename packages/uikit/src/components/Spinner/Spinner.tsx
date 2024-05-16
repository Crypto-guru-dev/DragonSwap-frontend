import React from "react";
import { SpinnerProps } from "./types";
import { Box } from "../Box";
import { Image } from "../Image";

const Spinner: React.FC<React.PropsWithChildren<SpinnerProps>> = ({ size = 100 }) => {
  return (
    <Box width={size} height={size * 1.197} position="relative">
      <Image
        width={size}
        height={size * 1.197}
        src="https://assets.ryuswap.com/images/decorations/3d-byte-rooster.png"
        alt="ryuswap-2d-spinner"
      />
    </Box>
  );
};

export default Spinner;
