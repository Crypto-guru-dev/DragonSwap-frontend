import { InputHTMLAttributes } from "react";
import { styled } from "styled-components";
import Text from "../Text/Text";

interface SliderLabelProps {
  progress: string;
}

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  $isMax: boolean;
}

interface DisabledProp {
  disabled?: boolean;
}

const getCursorStyle = ({ disabled = false }: DisabledProp) => {
  return disabled ? "not-allowed" : "cursor";
};

// const bunnyHeadMain = `"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAyOCAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMSIgeT0iMTkiIHdpZHRoPSIxNyIgaGVpZ2h0PSIxMSIgZmlsbD0iIzFGQzdENCIvPgo8cGF0aCBkPSJNOS41MDcgMjQuNzA2QzguMTQ2MzUgMjYuMDY2NiA5LjczNzk1IDI4LjIzMTMgMTEuNzU1NSAzMC4yNDg5QzEzLjc3MzEgMzIuMjY2NSAxNS45Mzc4IDMzLjg1ODEgMTcuMjk4NCAzMi40OTc0QzE4LjY1OTEgMzEuMTM2OCAxNy45Njg1IDI4LjA3MTEgMTUuOTUwOSAyNi4wNTM1QzEzLjkzMzMgMjQuMDM1OSAxMC44Njc2IDIzLjM0NTMgOS41MDcgMjQuNzA2WiIgZmlsbD0iIzFGQzdENCIvPgo8cGF0aCBkPSJNMTUuNTA3IDIyLjcwNkMxNC4xNDYzIDI0LjA2NjYgMTUuNzM3OSAyNi4yMzEzIDE3Ljc1NTUgMjguMjQ4OUMxOS43NzMxIDMwLjI2NjUgMjEuOTM3OCAzMS44NTgxIDIzLjI5ODQgMzAuNDk3NEMyNC42NTkxIDI5LjEzNjggMjMuOTY4NSAyNi4wNzExIDIxLjk1MDkgMjQuMDUzNUMxOS45MzMzIDIyLjAzNTkgMTYuODY3NiAyMS4zNDUzIDE1LjUwNyAyMi43MDZaIiBmaWxsPSIjMUZDN0Q0Ii8+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2QpIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC4xNDYgNi43NTE1OUMxNC4yMTA1IDcuMTA4OTYgMTQuMjcwMyA3LjQ4MTMxIDE0LjMyODEgNy44NjE2NEMxNC4yMTg5IDcuODU4NjUgMTQuMTA5NSA3Ljg1NzE0IDE0IDcuODU3MTRDMTMuMzgwMyA3Ljg1NzE0IDEyLjc2NDggNy45MDUzOSAxMi4xNTkgNy45OTc3OUMxMS44NzkgNy40MTQ1OCAxMS41NTQ3IDYuODIyNDYgMTEuMTg3MiA2LjIzMTQ1QzguNjk4OTcgMi4yMjk0NyA2LjUzODI2IDEuOTg2NzkgNC42Nzg4MiAyLjk4MzY2QzIuODE5MzggMy45ODA1MiAyLjg1NjI4IDYuNjc2NDQgNS4yNjY5NiA5LjQwNTM4QzUuNTgwNzYgOS43NjA2MSA1LjkwMDk3IDEwLjEzOTggNi4yMjQ3IDEwLjUyODZDMy42OTAxMyAxMi40NjU5IDIgMTUuMjY0NCAyIDE4LjI2OTVDMiAyMy44MjkyIDcuNzg1MTggMjUgMTQgMjVDMjAuMjE0OCAyNSAyNiAyMy44MjkyIDI2IDE4LjI2OTVDMjYgMTQuODY1OCAyMy44MzE4IDExLjcyNzIgMjAuNzI0MyA5LjgwNDc2QzIwLjkwMjIgOC44NjA0NCAyMSA3LjgzMDE5IDIxIDYuNzUxNTlDMjEgMi4xOTYxMiAxOS4yNTQ5IDEgMTcuMTAyMiAxQzE0Ljk0OTUgMSAxMy41MjYxIDMuMzE4NDcgMTQuMTQ2IDYuNzUxNTlaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfYnVubnloZWFkX21haW4pIi8+CjwvZz4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMikiPgo8cGF0aCBkPSJNMTIuNzI4NCAxNi40NDQ2QzEyLjc5NiAxNy4zMTQ5IDEyLjQ0NDYgMTkuMDU1NiAxMC40OTggMTkuMDU1NiIgc3Ryb2tlPSIjNDUyQTdBIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTEyLjc0NTcgMTYuNDQ0NkMxMi42NzgxIDE3LjMxNDkgMTMuMDI5NiAxOS4wNTU2IDE0Ljk3NjEgMTkuMDU1NiIgc3Ryb2tlPSIjNDUyQTdBIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTkgMTQuNUM5IDE1LjYwNDYgOC41NTIyOCAxNiA4IDE2QzcuNDQ3NzIgMTYgNyAxNS42MDQ2IDcgMTQuNUM3IDEzLjM5NTQgNy40NDc3MiAxMyA4IDEzQzguNTUyMjggMTMgOSAxMy4zOTU0IDkgMTQuNVoiIGZpbGw9IiM0NTJBN0EiLz4KPHBhdGggZD0iTTE4IDE0LjVDMTggMTUuNjA0NiAxNy41NTIzIDE2IDE3IDE2QzE2LjQ0NzcgMTYgMTYgMTUuNjA0NiAxNiAxNC41QzE2IDEzLjM5NTQgMTYuNDQ3NyAxMyAxNyAxM0MxNy41NTIzIDEzIDE4IDEzLjM5NTQgMTggMTQuNVoiIGZpbGw9IiM0NTJBN0EiLz4KPC9nPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KPGZlT2Zmc2V0IGR5PSIxIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjEiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfYnVubnloZWFkX21haW4iIHgxPSIxNCIgeTE9IjEiIHgyPSIxNCIgeTI9IjI1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM1M0RFRTkiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMUZDN0Q0Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="`;
const bunnyHeadMain = `"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAbCAYAAACJISRoAAAAAXNSR0IB2cksfwAABJRJREFUeJydlmtoXEUUx3eTmLZJoya2NVFEY1v1g7ZFERRDsRT7oJQWESqlpSBW+8EX+CDxTUGtURCkVfwgGhVBKmKfPiqFkAoFq6tFq5a0Nm0eYDe76e7dvXvvnZnr7+zOXZJtEpMOHGbm3HPO/7xm5sZi0xhK63ugpdHe8/1rp6M/pREEQZ0x5ltoH9Shjd4LPVLwvOpLNuoHwRXQnZlstj7iYXAGAJ9AP4dheA4KtdZPTNt4JudUofiM0uqhZCoV91XQzP4x7B3CeGeg1ErmXqVUG/Mu+DnWy6cMgIGrUPwIo/efP58s8pTSM43RLdRjIwaTUBaZQWaX+TBzwa53Anb1pAAFz6/VxuwB4FkikHQ1sn8uDE0vRhwxBAVhxcD4T9TmcZZ9JjRvTQjQ8+ORGMJd0AG6pgaAJYC1s98MbcfAiQrbubE4potIHxY59GeNC4LAMlvEpYnfjsdGMtn6QKsFKP8wypiSopOSRVrpuZIm9v3WgV9tKgXxK1K8xg9UYxngguNUGxP+wcdjg0NDEeiqSMkOF97qfQf2x5Lp4XjOdWfj0KMSEXq7oeddz5vDvEd8ZT4NbSiDkM+V1oMO2fsUH5ffQ/IovG5TKuqu3/88IY3RwnpvwfdnFxslCKRRpNu+gI4C3AZtQqeP+bYyCMXaWQIJ18uenN6K15u1dFmpRfPMdxdljdnB/q/KdLuFQp1EAJ3GkWbAr9l/8JvSx2w+H+fDL0WQMFwmvNRIKo7RF8lrm+2mIUBb5Bvrz6Q2jMVjaqrUHTj7GnILxym4qkdpwIKsivgBDYDXT9t6ZAh9iY1kW0nWHMfjWybq1jED4SZ0hm1NtkZ83/dqAP0U3jn7rVP4GcepYv2+Bc8S8Qs5N18zOYjRV2LiX2vo87EOhF1EsLXYunQaqWiTWyBbAmq3B1T0vuZcNY1n33HduHRLLXL/WM9obVW+vlF+SroJ/hnAXmdOM2/MZLJx+c56jaTSAh12XfeiiKjrnMhjub5TVvjdvv6zpboo1Zh3Cw3SvnJGMLqc9XfQl3Ll9A8Mynm6T7ovLB2OLZUg8FZEHr8M9ZTzjGIkdCyRKHoD4IO5nDuLUOuR/QA6BFADrRtn/bF1MJEaSY8F0fpVG5K6EcR3BCACwsMJr27kb7BGdxQj1npRdC0EttVl4MTcSCZKzSZ5fOyBkuEg8DYGr0tfGImXFT1Pbup2K5P4+1RvLJN1qqIOxcZ8kTs7MCCpegX9+WUQTvnlvHoL5U0oHZnycNh8T6u/Ab0p99uo74lTfWeK+qxPyv3mB/7MYrT8DyD74UVpGE6nGwCT57UjLL0dkw55a2xaGth6cn5sVpqlQQC6aaKUS1Ty/K4WwYqooiEGOzFeZ4u7QToMozcHgWqSHw14a5PDwxNiVBZZbt0HwHrSCBmzzuOWHlXceXhxEqPrSVUr349ordZOzfr/jLzrVuP5vTwTu+VQcgeuk7cE3l3TNtY/OFjDWZhHRK1GmwXUYbHSZgWGX4K2kP/bmbdD23zfr71kr7u7e2IqULWASL6bAJzh5Jxq3w9a8fx60nTZZPr/ATQUokts9xvwAAAAAElFTkSuQmCC"`;
// const bunnyButt = `"data:image/svg+xml,%3Csvg width='15' height='32' viewBox='0 0 15 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.58803 20.8649C7.72935 21.3629 8.02539 24.0334 8.76388 26.7895C9.50238 29.5456 10.5812 32.0062 12.4399 31.5082C14.2986 31.0102 15.2334 28.0099 14.4949 25.2538C13.7564 22.4978 11.4467 20.3669 9.58803 20.8649Z' fill='%230098A1'/%3E%3Cpath d='M1 24.4516C1 20.8885 3.88849 18 7.45161 18H15V28H4.54839C2.58867 28 1 26.4113 1 24.4516Z' fill='%231FC7D4'/%3E%3Cpath d='M6.11115 17.2246C6.79693 18.4124 5.77784 19.3343 4.52793 20.0559C3.27802 20.7776 1.97011 21.1992 1.28433 20.0114C0.598546 18.8236 1.1635 17.1151 2.41341 16.3935C3.66332 15.6718 5.42537 16.0368 6.11115 17.2246Z' fill='%2353DEE9'/%3E%3Cpath d='M1.64665 23.6601C0.285995 25.0207 1.87759 27.1854 3.89519 29.203C5.91279 31.2206 8.07743 32.8122 9.43808 31.4515C10.7987 30.0909 10.1082 27.0252 8.09058 25.0076C6.07298 22.99 3.0073 22.2994 1.64665 23.6601Z' fill='%231FC7D4'/%3E%3C/svg%3E"`;
// const bunnyButt = `"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAoCAYAAAC8cqlMAAACWklEQVRYhe2YPWgUQRTHZ0VTiObDEIMYyAWJCIq9gmBhZ2+rYCtYJF0QFBsrRbCwFhQUQYigoJ2ISAx+FxbiKYRACKilEOQnY97hYzK7O3fu7E1g/7DF3b6b+f923r43N6ZRo0aNGv2PgFFgW7dDbEnlqQPbgbPGmLEsy9aqHHgX8AJY6+K60uNcJ4DnQKsyAGeCHcAi3ekaELTSwDRwH3gD7IkCoSYbAV4qlDZwxnO1VcwtYKBgzAyYA34A9+wDiwqhJt4JLCijD4CtTkzLgbljDXvGOg58kJibPgggKswQ8EoZvQsMOzFTDsyTToys7A1171LOPHFBFMxrZeaxrTZOzD7gi4p5BsxIGnU0VwQRHcT8q2YaZsGzMjbNljwlwla200UAtYEomHfK4HtgtwdGp9l34EgyEMrAqAPzCdjrxOwXmG/AAc8Y/YVQRsZUBbL6DEw6MS33O5MShDJkYT4qmHZZh04OoiNgXNJHwwznxEaBqGrTOGWM0TvW+SzLflY0dj2Sd2ClrNF15FuRFN4PC/FVQZzPidvwOaWKNaE6+K+QRld0r189ZEhVqlXgqCem1GhfYWQL/lQgbFpNh0IkBQPcVp18Q78ogwiFiQ1xVSDe2v1WCEQRXNFvY0JcFIhHvmZXRQpFBwEuCMT1nPtBJkLTLgqI7Q0CcbnMXOB49YMAJ4HfwGwVEL7fRQcBDgHLwKmqAGqXHCLYg4ZjOZBpA5h1k5Nywng4ATu9Sf5XPLT7qM3o/6/skaWcO21eCLMOcg4YTMBKb5JN4MHQg+dkVdsBckwZY/4AcoNOFod9ddcAAAAASUVORK5CYII="`;
// const bunnyButt = "https://assets.ryuswap.com/web/chains/1923.png";

const getBaseThumbStyles = ({ $isMax, disabled }: StyledInputProps) => `
  -webkit-appearance: none;
  background-image: url(${bunnyHeadMain});
  background-color: transparent;
  background-repeat: none;
  box-shadow: none;
  border: 0;
  cursor: ${getCursorStyle};
  width: 25px;
  height: 27px;
  position:relative;
  left: -28px;
  filter: ${disabled ? "grayscale(100%)" : "none"};
  transform: translate(-2px, -2px);
  transition: 200ms transform;
  &:hover {
    transform: ${disabled ? "scale(1) translate(-2px, -2px)" : "scale(1.1) translate(-3px, -3px)"};
  }
`;

export const SliderLabelContainer = styled.div`
  bottom: 0;
  position: absolute;
  left: 14px;
  width: calc(100% - 30px);
`;

export const SliderLabel = styled(Text)<SliderLabelProps>`
  bottom: 0;
  font-size: 12px;
  left: ${({ progress }) => progress};
  position: absolute;
  text-align: center;
  min-width: 24px; // Slider thumb size
`;

export const BunnyButt = styled.div<DisabledProp>`
  height: 40px;
  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
  position: absolute;
  width: 51px;
`;

export const BunnySlider = styled.div`
  position: absolute;
  left: 28px;
  width: calc(100%);
`;

export const StyledInput = styled.input<StyledInputProps>`
  cursor: ${getCursorStyle};
  height: 40px;
  position: relative;
  &::-webkit-slider-thumb {
    ${getBaseThumbStyles}
  }
  &::-moz-range-thumb {
    ${getBaseThumbStyles}
  }
  &::-ms-thumb {
    ${getBaseThumbStyles}
  }
`;

export const BarBackground = styled.div<DisabledProp>`
  background-color: ${({ theme, disabled }) => theme.colors[disabled ? "textDisabled" : "inputSecondary"]};
  height: 2px;
  position: absolute;
  top: 18px;
  width: 84%;
`;

export const BarProgress = styled.div<DisabledProp>`
  background-color: ${({ theme }) => theme.colors.primary};
  filter: ${({ disabled }) => (disabled ? "grayscale(100%)" : "none")};
  height: 10px;
  position: absolute;
  top: 18px;
`;
