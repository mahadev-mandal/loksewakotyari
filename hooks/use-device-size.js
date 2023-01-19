import { useMediaQuery } from "react-responsive";

// Hook will return true value for specific device
/*
{
    "xs": false,
    "sm": false,
    "smPlus": true,
    "md": true,
    "mdPlus": true,
    "lg": true,
    "lgPlus": true,
    "xl": false
}
*/
// breakpoints: [xs, sm, md, lg, xl, xxl],
// breakpoints: [576, 768, 992, 1200, 1600, 1920],

export default function useDeviceSize() {
  const deviceSizes = {
    xsDown: useMediaQuery({ maxWidth: 575 }) || false,
    onlyxs: useMediaQuery({ minWidth: 576, maxWidth: 767 }) || false,
    xsUp: useMediaQuery({ minWidth: 576 }) || false,
    smDown: useMediaQuery({ maxWidth: 767 }) || false,
    onlySm: useMediaQuery({ minWidth: 768, maxWidth: 991 }) || false,
    smUp: useMediaQuery({ minWidth: 768 }) || false,
    mdDown: useMediaQuery({ maxWidth: 991 }) || false,
    onlyMd: useMediaQuery({ minWidth: 992, maxWidth: 1199 }) || false,
    mdUp: useMediaQuery({ minWidth: 992 }) || false,
    lgDown: useMediaQuery({ maxWidth: 1199 }) || false,
    lgUp: useMediaQuery({ minWidth: 1200 }) || false,
  };

  return deviceSizes;
}
