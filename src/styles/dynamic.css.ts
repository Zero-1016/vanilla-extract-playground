import { createThemeContract, createTheme, style } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: null,
  size: null,
});

// 기본 테마 생성
export const [themeClass, vars2] = createTheme(vars, {
  color: "transparent",
  size: "0px",
});

export const dynamicBox = style([
  themeClass,
  {
    backgroundColor: vars.color,
    width: vars.size,
    height: vars.size,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    color: "#000",
    fontWeight: "bold",
    transition: "all 0.2s ease-in-out",
  },
]);
