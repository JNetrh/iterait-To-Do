import styled from "@emotion/styled";

import { breakpoints } from "./theme";

export default styled;

export function mediaBreakpointUp(breakpoint) {
  return `@media (min-width: ${breakpoints[breakpoint]}px)`;
}

export function mediaBreakpointDown(breakpoint) {
  return `@media (max-width: ${breakpoints[breakpoint] - 0.02}px)`;
}

export function mediaBreakpointBetween(min, max) {
  return `@media (min-width: ${
    breakpoints[min]
  }px) and (max-width: ${breakpoints[max] - 0.02}px)`;
}

export function mediaBreakpointOnly(breakpoint) {
  switch (breakpoint) {
    case "sm":
      return mediaBreakpointDown("md");

    case "md":
      return mediaBreakpointBetween("md", "lg");

    case "lg":
      return mediaBreakpointBetween("lg", "xl");

    case "xl":
      return mediaBreakpointBetween("xl", "xxl");

    case "xxl":
      return mediaBreakpointUp("xxl");

    default:
      throw new Error("Invalid breakpoint");
  }
}

export function adjustColorSaturation(col, amt) {
  let usePound = false;
  let color = col;

  if (color[0] === "#") {
    color = color.slice(1);
    usePound = true;
  }

  const num = Number.parseInt(color, 16);

  let r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  let b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}
