import { LabelHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = ({ className, ...props }: LabelProps) => {
  return (
    <label
      className={cn("text-sm font-semibold text-white", className)}
      {...props}
    />
  );
};
