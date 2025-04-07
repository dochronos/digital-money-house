"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { TransactionType } from "@/types/transaction.types";

const ITEMS_PER_PAGE = 10;

const useTransactions = (allTransactions: TransactionType[]) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // 🟡 Obtener valores iniciales desde la URL
  const initialSearch = searchParams.get("search") || "";
  const initialTypes = searchParams.getAll("type");

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [activeFilters, setActiveFilters] = useState<string[]>(initialTypes);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredTransactions, setFilteredTransactions] = useState<TransactionType[]>([]);

  // 🟢 Filtrado según búsqueda y filtros activos
  useEffect(() => {
    let filtered = allTransactions;

    if (searchTerm.trim()) {
      filtered = filtered.filter((t) =>
        t.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (activeFilters.length > 0) {
      filtered = filtered.filter((t) => activeFilters.includes(t.type));
    }

    setFilteredTransactions(filtered);
    setCurrentPage(1);
  }, [searchTerm, allTransactions, activeFilters]);

  const totalPages = Math.ceil(filteredTransactions.length / ITEMS_PER_PAGE);
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // 🟠 Buscar al presionar Enter y actualizar la URL
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      updateURL(searchTerm, activeFilters);
    }
  };

  // 🔵 Cambiar filtros y actualizar URL
  const toggleFilter = (filter: string) => {
    let updatedFilters: string[];
    if (activeFilters.includes(filter)) {
      updatedFilters = activeFilters.filter((f) => f !== filter);
    } else {
      updatedFilters = [...activeFilters, filter];
    }

    setActiveFilters(updatedFilters);
    updateURL(searchTerm, updatedFilters);
  };

  // 🧠 Función para actualizar la URL
  const updateURL = (search: string, filters: string[]) => {
    const params = new URLSearchParams();

    if (search.trim()) {
      params.set("search", search);
    }

    filters.forEach((f) => params.append("type", f));

    router.push(`/dashboard?${params.toString()}`);
  };

  const changePage = (page: number) => setCurrentPage(page);

  return {
    searchTerm,
    setSearchTerm,
    handleSearch,
    currentPage,
    changePage,
    paginatedTransactions,
    totalPages,
    activeFilters,
    toggleFilter, // ← importante: usar esto en vez de setActiveFilters directo
  };
};

export default useTransactions;
