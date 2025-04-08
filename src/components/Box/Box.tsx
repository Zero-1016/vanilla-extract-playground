import { HTMLAttributes } from "react";
import { sprinkles, Sprinkles } from "../../styles/sprinkles.css";

interface BoxProps
  extends Omit<HTMLAttributes<HTMLDivElement>, keyof Sprinkles>,
    Sprinkles {}

export const Box = ({ className, ...props }: BoxProps) => {
  const sprinklesProps: Record<string, unknown> = {};
  const otherProps: Record<string, unknown> = {};

  Object.entries(props).forEach(([key, value]) => {
    if (sprinkles.properties.has(key as keyof Sprinkles)) {
      sprinklesProps[key] = value;
    } else {
      otherProps[key] = value;
    }
  });

  return (
    <div
      className={[sprinkles(sprinklesProps), className]
        .filter(Boolean)
        .join(" ")}
      {...otherProps}
    />
  );
};
