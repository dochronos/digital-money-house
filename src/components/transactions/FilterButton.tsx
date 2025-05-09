"use client";

import { Button } from "@/components/ui/Button";
import FilterIcon from "@/components/common/Icons/FilterIcon";

type FilterButtonProps = {
  availableFilters: string[];
  activeFilters: string[];
  toggleFilter: (filter: string) => void;
};

export default function FilterButton({
  availableFilters,
  activeFilters,
  toggleFilter,
}: FilterButtonProps) {
  return (
    <div className="hidden md:flex items-center gap-3 rounded-xl bg-green p-3 shadow-md">
      <div className="flex items-center gap-2">
        <FilterIcon className="w-5 h-5 text-black" />
        <span className="text-black text-base font-bold">Filtrar:</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {availableFilters.map((filter) => {
          const isActive = activeFilters.includes(filter);

          return (
            <Button
              key={filter}
              size="sm"
              variant={isActive ? "secondary" : "ghost"}
              className={
                isActive
                  ? "bg-white text-green font-semibold"
                  : "bg-transparent text-white hover:bg-white/10"
              }
              onClick={() => toggleFilter(filter)}
            >
              {filter}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
