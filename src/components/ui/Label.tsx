import React from "react";

type LabelProps = {
  htmlFor: string;
  children: React.ReactNode;
};

export const Label = ({ htmlFor, children }: LabelProps) => (
  <label htmlFor={htmlFor} className="text-sm font-semibold text-white">
    {children}
  </label>
);
