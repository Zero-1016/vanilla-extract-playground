import { globalStyle, createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  colors: {
    background: "#ffffff",
    foreground: "#171717",
  },
});

// Dark mode theme
globalStyle(':root[data-theme="dark"]', {
  vars: {
    [vars.colors.background]: "#0a0a0a",
    [vars.colors.foreground]: "#ededed",
  },
});

// Global styles
globalStyle("html, body", {
  maxWidth: "100vw",
  overflowX: "hidden",
});

globalStyle("body", {
  color: vars.colors.foreground,
  background: vars.colors.background,
  fontFamily: "Arial, Helvetica, sans-serif",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});

globalStyle("*", {
  boxSizing: "border-box",
  padding: 0,
  margin: 0,
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});
