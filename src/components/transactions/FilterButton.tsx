"use client";

import { Button } from "@/components/ui/Button";
import FilterIcon from "@/components/common/Icons/FilterIcon";

type FilterButtonProps = {
  onClick?: () => void;
};

const FilterButton = ({ onClick }: FilterButtonProps) => {
  return (
    <div className="hidden md:block rounded-xl bg-green shadow-sm">
      <Button
        onClick={onClick}
        className="w-full gap-16 flex justify-between p-5 items-center text-black text-base font-bold"
      >
        Filtrar
        <FilterIcon />
      </Button>
    </div>
  );
};

export default FilterButton;
