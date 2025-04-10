"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { TransactionType } from "@/types/transaction.types";

const ITEMS_PER_PAGE = 10;

const useTransactions = (
  allTransactions: TransactionType[],
  options?: {
    initialSearchTerm?: string;
    initialFilters?: string[];
  }
) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initialSearch = options?.initialSearchTerm ?? searchParams.get("search") ?? "";
  const initialFilters = options?.initialFilters ?? searchParams.getAll("type");

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [activeFilters, setActiveFilters] = useState<string[]>(initialFilters);
  const [currentPage, setCurrentPage] = useState(1);
  const [filtered, setFiltered] = useState<TransactionType[]>([]);

  // Filtros y búsqueda
  useEffect(() => {
    let result = [...allTransactions];

    if (searchTerm.trim()) {
      result = result.filter((t) =>
        t.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (activeFilters.length > 0) {
      result = result.filter((t) => activeFilters.includes(t.type));
    }

    setFiltered(result);
    setCurrentPage(1);
  }, [searchTerm, activeFilters, allTransactions]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginatedTransactions = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const updateURL = (search: string, filters: string[]) => {
    const params = new URLSearchParams();
    if (search.trim()) params.set("search", search);
    filters.forEach((f) => params.append("type", f));
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") updateURL(searchTerm, activeFilters);
  };

  const toggleFilter = (filter: string) => {
    const updated = activeFilters.includes(filter)
      ? activeFilters.filter((f) => f !== filter)
      : [...activeFilters, filter];

    setActiveFilters(updated);
    updateURL(searchTerm, updated);
  };

  return {
    searchTerm,
    setSearchTerm,
    handleSearch,
    currentPage,
    changePage: setCurrentPage,
    paginatedTransactions,
    totalPages,
    activeFilters,
    toggleFilter,
  };
};

export default useTransactions;
