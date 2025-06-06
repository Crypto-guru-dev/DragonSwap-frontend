import React, { ChangeEvent, useCallback } from "react";
import { Box } from "../Box";
import {
  BunnySlider,
  BarBackground,
  BarProgress,
  BunnyButt,
  StyledInput,
  SliderLabel,
  SliderLabelContainer,
} from "./styles";
import SliderProps from "./types";

const Slider: React.FC<React.PropsWithChildren<SliderProps>> = ({
  name,
  min,
  max,
  value,
  onValueChanged,
  valueLabel,
  step = "any",
  disabled = false,
  ...props
}) => {
  const handleChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      onValueChanged(parseFloat(target.value));
    },
    [onValueChanged]
  );

  const progressPercentage = (value / max) * 100;
  const isMax = value === max;
  let progressWidth: string;
  if (progressPercentage <= 10) {
    progressWidth = `${progressPercentage + 0.0}%`;
  } else if (progressPercentage >= 90) {
    progressWidth = `${progressPercentage - 14}%`;
  } else if (progressPercentage >= 80) {
    progressWidth = `${progressPercentage - 10}%`;
  } else if (progressPercentage >= 60) {
    progressWidth = `${progressPercentage - 8}%`;
  } else if (progressPercentage >= 40) {
    progressWidth = `${progressPercentage - 6}%`;
  } else if (progressPercentage >= 25) {
    progressWidth = `${progressPercentage - 4}%`;
  } else if (progressPercentage >= 15) {
    progressWidth = `${progressPercentage - 3}%`;
  } else {
    progressWidth = `${progressPercentage}%`;
  }
  const labelProgress = isMax ? "calc(100% - 12px)" : `${progressPercentage}%`;
  const displayValueLabel = isMax ? "MAX" : valueLabel;
  return (
    <Box position="relative" height="48px" {...props}>
      <BunnyButt disabled={disabled} />
      <BunnySlider>
        <BarBackground disabled={disabled} />
        <BarProgress style={{ width: progressWidth }} disabled={disabled} />
        <StyledInput
          name={name}
          type="range"
          min={min}
          max={max}
          value={value}
          step={step}
          onChange={handleChange}
          $isMax={isMax}
          disabled={disabled}
        />
      </BunnySlider>
      {valueLabel && (
        <SliderLabelContainer>
          <SliderLabel progress={labelProgress}>{displayValueLabel}</SliderLabel>
        </SliderLabelContainer>
      )}
    </Box>
  );
};

export default Slider;
