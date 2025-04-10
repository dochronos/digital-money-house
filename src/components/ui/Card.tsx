import { cn } from "@/lib/utils";
import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={cn("bg-dark2 p-4 rounded-2xl shadow-md", className)}>
      {children}
    </div>
  );
};

