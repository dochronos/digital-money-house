import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "px-4 py-2 rounded-xl bg-green text-white hover:opacity-90 transition",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

