import { LabelHTMLAttributes } from "react";
import clsx from "clsx";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = ({ className, ...props }: LabelProps) => {
  return (
    <label
      className={clsx("text-sm font-semibold text-white", className)}
      {...props}
    />
  );
};
