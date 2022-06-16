// import { sizeMappingPadding } from "@defines/sizeMapping";
import classNames from "classnames";
import React, { forwardRef } from "react";
const sizeMap = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
};
const sizeMappingPadding = {
  xs: "px-3 py-2",
  sm: "px-4 py-3",
  md: "px-5 py-3",
  lg: "px-6 py-4",
  //   xl: "max-w-xl",
  //   "2xl": "max-w-2xl",
  //   "3xl": "max-w-3xl",
  //   "4xl": "max-w-4xl",
  //   "5xl": "max-w-5xl",
  //   "6xl": "max-w-6xl",
};
export { sizeMap, sizeMappingPadding };

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClassName: string;
  size?: keyof typeof sizeMappingPadding;
}
const Input = (
  { size = "lg", className, label, containerClassName, ...rest }: Props,
  ref
) => {
  const s = sizeMappingPadding?.[size];
  return (
    <div className="w-full space-y-1">
      {label && <div className="font-medium">{label}</div>}
      <input
        {...rest}
        ref={ref}
        className={classNames("custom-input", s, className)}
      />
    </div>
  );
};

export default forwardRef(Input);
