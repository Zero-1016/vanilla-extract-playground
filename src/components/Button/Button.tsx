import { ComponentProps } from "react";
import { button, ButtonVariants } from "./button.css";

type ButtonProps = ButtonVariants & ComponentProps<"button">;

export const Button = ({
  variant,
  size,
  fullWidth,
  disabled,
  className,
  children,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      className={[button({ variant, size, fullWidth, disabled }), className]
        .filter(Boolean)
        .join(" ")}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};
