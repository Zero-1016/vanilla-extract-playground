import { style, createVar, globalStyle } from "@vanilla-extract/css";
import { vars } from "../../styles/globals.css";

const grayRgb = createVar();
const grayAlpha200 = createVar();
const grayAlpha100 = createVar();
const buttonPrimaryHover = createVar();
const buttonSecondaryHover = createVar();

export const page = style({
  vars: {
    [grayRgb]: "0, 0, 0",
    [grayAlpha200]: `rgba(${grayRgb}, 0.08)`,
    [grayAlpha100]: `rgba(${grayRgb}, 0.05)`,
    [buttonPrimaryHover]: "#383838",
    [buttonSecondaryHover]: "#f2f2f2",
  },
  display: "grid",
  gridTemplateRows: "20px 1fr 20px",
  alignItems: "center",
  justifyItems: "center",
  minHeight: "100svh",
  padding: "80px",
  gap: "64px",
  "@media": {
    "(prefers-color-scheme: dark)": {
      vars: {
        [grayRgb]: "255, 255, 255",
        [grayAlpha200]: `rgba(${grayRgb}, 0.145)`,
        [grayAlpha100]: `rgba(${grayRgb}, 0.06)`,
        [buttonPrimaryHover]: "#ccc",
        [buttonSecondaryHover]: "#1a1a1a",
      },
    },
    "(max-width: 600px)": {
      padding: "32px",
      paddingBottom: "80px",
    },
  },
});

export const main = style({
  display: "flex",
  flexDirection: "column",
  gap: "32px",
  gridRowStart: 2,
  "@media": {
    "(max-width: 600px)": {
      alignItems: "center",
    },
  },
});

globalStyle(`${main} ol`, {
  paddingLeft: 0,
  margin: 0,
  fontSize: "14px",
  lineHeight: "24px",
  letterSpacing: "-0.01em",
  listStylePosition: "inside",
  "@media": {
    "(max-width: 600px)": {
      textAlign: "center",
    },
  },
});

globalStyle(`${main} li:not(:last-of-type)`, {
  marginBottom: "8px",
});

globalStyle(`${main} code`, {
  fontFamily: "inherit",
  background: grayAlpha100,
  padding: "2px 4px",
  borderRadius: "4px",
  fontWeight: 600,
});

export const ctas = style({
  display: "flex",
  gap: "16px",
  "@media": {
    "(max-width: 600px)": {
      flexDirection: "column",
    },
  },
});

const baseLink = style({
  appearance: "none",
  borderRadius: "128px",
  height: "48px",
  padding: "0 20px",
  border: "1px solid transparent",
  transition: "background 0.2s, color 0.2s, border-color 0.2s",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
  lineHeight: "20px",
  fontWeight: 500,
  "@media": {
    "(max-width: 600px)": {
      fontSize: "14px",
      height: "40px",
      padding: "0 16px",
    },
  },
});

export const primary = style([
  baseLink,
  {
    background: vars.colors.foreground,
    color: vars.colors.background,
    gap: "8px",
  },
]);

globalStyle(`@media (hover: hover) and (pointer: fine)`, {
  [`.${primary}:hover`]: {
    background: buttonPrimaryHover,
    borderColor: "transparent",
  },
});

export const secondary = style([
  baseLink,
  {
    borderColor: grayAlpha200,
    minWidth: "158px",
    "@media": {
      "(max-width: 600px)": {
        minWidth: "auto",
      },
    },
  },
]);

globalStyle(`@media (hover: hover) and (pointer: fine)`, {
  [`.${secondary}:hover`]: {
    background: buttonSecondaryHover,
    borderColor: "transparent",
  },
});

export const footer = style({
  gridRowStart: 3,
  display: "flex",
  gap: "24px",
  "@media": {
    "(max-width: 600px)": {
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
    },
  },
});

globalStyle(`${footer} a`, {
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

globalStyle(`@media (hover: hover) and (pointer: fine)`, {
  [`${footer} a:hover`]: {
    textDecoration: "underline",
    textUnderlineOffset: "4px",
  },
});

globalStyle(`${footer} img`, {
  flexShrink: 0,
});

export const logo = style({
  "@media": {
    "(prefers-color-scheme: dark)": {
      filter: "invert()",
    },
  },
});
