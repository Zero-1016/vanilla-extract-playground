import {
  style,
  globalStyle,
  keyframes,
  createContainer,
} from "@vanilla-extract/css";

// 1. Keyframes
export const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

// 2. Container Query
export const container = createContainer();

// 3. Global Styles
globalStyle("body", {
  margin: 0,
  padding: 0,
});

// 4. Complex Selectors
export const card = style({
  padding: "16px",

  // 중첩 선택자
  selectors: {
    "&:hover": {
      transform: "scale(1.02)",
    },
    // 복합 선택자
    "&:not(:first-child)": {
      marginTop: "8px",
    },
  },
});

// 5. Media Queries
export const responsive = style({
  "@media": {
    "screen and (min-width: 768px)": {
      display: "flex",
    },
  },
});

// 6. CSS Variables
export const withVars = style({
  vars: {
    "--custom-color": "blue",
  },
  color: "var(--custom-color)",
});
