import { cn } from "@/lib/utils";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-xl bg-green text-white hover:opacity-90 transition",
        className
      )}
      {...props}
    />
  );
};
