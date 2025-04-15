"use client";

import React from "react";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export default function SearchInput({ value, onChange, onKeyDown }: Props) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder="Buscar transacción..."
      className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-green"
    />
  );
}
