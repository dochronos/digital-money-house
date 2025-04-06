"use client";
import SearchIcon from "@/components/common/Icons/SearchIcon";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ value, onChange, onKeyDown }: SearchBarProps) => {
  return (
    <div className="w-full flex items-center gap-5 p-5 md:px-8 md:gap-8 xl:px-12 bg-white border border-select1 rounded-[10px] shadow-md">
      <SearchIcon />
      <input
        className="text-black/50 text-base w-full outline-none md:text-[18px]"
        type="text"
        placeholder="Buscar en tu actividad"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};

export default SearchBar;
