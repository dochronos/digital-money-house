import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full rounded-xl border border-gray-300 p-2 text-sm outline-none transition focus:border-green focus:ring-1 focus:ring-green",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
