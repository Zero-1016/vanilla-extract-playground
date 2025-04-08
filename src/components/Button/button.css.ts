import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "../../styles/theme.css";

export const button = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.5rem 1rem",
    borderRadius: vars.borderRadius.medium,
    fontSize: vars.fontSize.base,
    fontWeight: vars.fontWeight.medium,
    transition: "all 0.2s ease-in-out",
    cursor: "pointer",
    border: "none",
    outline: "none",
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: vars.color.blue500,
        color: vars.color.white,
        ":hover": {
          backgroundColor: vars.color.blue600,
        },
      },
      secondary: {
        backgroundColor: vars.color.gray200,
        color: vars.color.gray900,
        ":hover": {
          backgroundColor: vars.color.gray300,
        },
      },
      outline: {
        backgroundColor: "transparent",
        border: `1px solid ${vars.color.gray300}`,
        color: vars.color.gray900,
        ":hover": {
          backgroundColor: vars.color.gray100,
        },
      },
    },
    size: {
      small: {
        padding: "0.25rem 0.5rem",
        fontSize: vars.fontSize.sm,
      },
      medium: {
        padding: "0.5rem 1rem",
        fontSize: vars.fontSize.base,
      },
      large: {
        padding: "0.75rem 1.5rem",
        fontSize: vars.fontSize.lg,
      },
    },
    fullWidth: {
      true: {
        width: "100%",
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: "not-allowed",
        pointerEvents: "none",
      },
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "medium",
    fullWidth: false,
    disabled: false,
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
