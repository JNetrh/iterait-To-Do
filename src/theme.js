import { ThemeContext } from "@emotion/core";
import { useContext } from "react";

export const breakpoints = {
  sm: 0,
  md: 768,
  lg: 1024,
  xl: 1200,
  xxl: 1600
};

const colorPalette = {
  black: "#000",
  white: "#ffffff",
  grayAlto: "#dedede",
  grayMineShaft: "#3C3C3C",
  graySilverChalice: "#a0a0a0",
  redPersian: "#c83232",
  redSienna: "#F06450",
  transparent: "transparent",
  greenEucalyptus: "#289646"
};

const defaultTheme = {
  breakpoints: Object.values(breakpoints)
    .slice(1)
    .map(b => `${b}px`),
  colorPalette
};

export { defaultTheme };

export const useTheme = () => useContext(ThemeContext);
