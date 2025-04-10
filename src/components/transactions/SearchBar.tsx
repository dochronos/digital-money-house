"use client";

import SearchIcon from "@/components/common/Icons/SearchIcon";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ value, onChange, onKeyDown }: SearchBarProps) => {
  return (
    <div className="w-full flex items-center gap-4 p-4 md:p-5 bg-white border border-gray-300 rounded-xl shadow-sm">
      <SearchIcon className="w-5 h-5 text-gray-400" />
      <input
        type="text"
        placeholder="Buscar en tu actividad"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        className="w-full text-sm md:text-base text-dark1 placeholder:text-gray-400 bg-transparent outline-none"
        aria-label="Buscar transacción"
      />
    </div>
  );
};

export default SearchBar;
