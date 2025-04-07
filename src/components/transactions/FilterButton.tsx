"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import FilterIcon from "@/components/common/Icons/FilterIcon";

type FilterButtonProps = {
  availableFilters: string[];
};

export default function FilterButton({ availableFilters }: FilterButtonProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // Cargar filtros desde la URL en el primer render
  useEffect(() => {
    const currentFilters = searchParams.getAll("filter");
    if (currentFilters.length > 0) {
      setSelectedFilters(currentFilters);
    }
  }, [searchParams]);

  const toggleFilter = (filter: string) => {
    let updatedFilters: string[];

    if (selectedFilters.includes(filter)) {
      updatedFilters = selectedFilters.filter((f) => f !== filter);
    } else {
      updatedFilters = [...selectedFilters, filter];
    }

    setSelectedFilters(updatedFilters);

    // Actualizar los parámetros de la URL
    const params = new URLSearchParams(searchParams.toString());
    params.delete("filter");
    updatedFilters.forEach((f) => params.append("filter", f));

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="hidden md:block rounded-xl bg-green shadow-sm p-2">
      <div className="flex flex-col gap-2">
        <Button className="w-full justify-between p-5" disabled>
          <span className="text-black text-base font-bold">Filtrar</span>
          <FilterIcon />
        </Button>

        {availableFilters.map((filter) => (
          <Button
            key={filter}
            onClick={() => toggleFilter(filter)}
            className={`w-full text-sm font-medium p-2 px-4 rounded-lg justify-start ${
              selectedFilters.includes(filter)
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {filter}
          </Button>
        ))}
      </div>
    </div>
  );
}

