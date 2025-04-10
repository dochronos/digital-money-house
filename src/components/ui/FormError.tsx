import React from "react";

interface FormErrorProps {
  message?: string;
  className?: string;
}

export const FormError: React.FC<FormErrorProps> = ({
  message,
  className = "",
}) => {
  if (!message) return null;

  return (
    <p className={`text-sm text-error1 mt-1 ${className}`}>
      {message}
    </p>
  );
};
