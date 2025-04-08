import { ComponentProps } from "react";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { dynamicBox, vars } from "../../styles/dynamic.css";

type DynamicBoxProps = {
  color: string;
  size: string;
} & ComponentProps<"div">;

export const DynamicBox = ({
  color,
  size,
  style,
  ...props
}: DynamicBoxProps) => {
  return (
    <div
      className={dynamicBox}
      style={{
        ...style,
        ...assignInlineVars({
          [vars.color]: color,
          [vars.size]: size,
        }),
      }}
      {...props}
    />
  );
};
