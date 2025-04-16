import React from "react";

type InputRadiusProps = {
  label?: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

const InputRadius = ({
  label,
  name,
  value,
  placeholder = "",
  onChange,
  type = "text",
}: InputRadiusProps) => {
  return (
    <div className="w-full flex flex-col gap-2">
      {label && (
        <label htmlFor={name} className="text-sm font-semibold text-white">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-green focus:border-transparent"
      />
    </div>
  );
};

export default InputRadius;