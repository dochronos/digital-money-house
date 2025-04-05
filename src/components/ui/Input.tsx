import React from "react";
import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={cn(
        "w-full px-4 py-2 border rounded-lg text-black outline-none",
        className
      )}
      {...props}
    />
  );
};
